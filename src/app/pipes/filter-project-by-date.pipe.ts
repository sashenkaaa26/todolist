import { Pipe, PipeTransform } from '@angular/core';
import { IProject } from '../models/project';

@Pipe({
  name: 'filterProjectByDate',
})
export class FilterProjectByDatePipe implements PipeTransform {
  transform(projects: IProject[], filter: string): IProject[] {
    let currentDate = new Date(Date.now());

    if (filter == 'all') {
      return projects;
    }
    if (filter == 'day') {
      let filteredProjects = projects.filter((p) => {
        return (
          p.tasks.filter(
            (t) =>
              t.date.getDate() == currentDate.getDate() &&
              t.date.getMonth() == currentDate.getMonth() &&
              t.date.getFullYear() == currentDate.getFullYear()
          ).length != 0
        );
      });
      return filteredProjects;
    }
    if (filter === 'month') {
      let filteredProjects = projects.filter((p) => {
        return (
          p.tasks.filter(
            (t) =>
              t.date.getMonth() == currentDate.getMonth() &&
              t.date.getFullYear() == currentDate.getFullYear()
          ).length != 0
        );
      });
      return filteredProjects;
    }

    return projects;
  }
}
