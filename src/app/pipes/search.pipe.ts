import { Pipe, PipeTransform } from '@angular/core';
import { IProject } from '../models/project';
import { ITask } from '../models/task';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(projects: IProject[], search: string): IProject[] {
    if (search.length === 0) {
      return projects;
    }
    return projects.filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase())
    );
  }
}
