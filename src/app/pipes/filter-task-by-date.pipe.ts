import { Pipe, PipeTransform } from '@angular/core';
import { IProject } from '../models/project';
import { ITask } from '../models/task';

@Pipe({
  name: 'filterTaskByDate',
})
export class FilterTaskByDatePipe implements PipeTransform {
  transform(tasks: ITask[], filter: string): ITask[] {
    let currentDate = new Date(Date.now());

    if (filter == 'all') {
      return tasks;
    }
    if (filter == 'day') {
      return tasks.filter(
        (t) =>
          t.date.getDate() == currentDate.getDate() &&
          t.date.getMonth() == currentDate.getMonth() &&
          t.date.getFullYear() == currentDate.getFullYear()
      );
    }
    if (filter == 'month') {
      return tasks.filter(
        (t) =>
          t.date.getMonth() == currentDate.getMonth() &&
          t.date.getFullYear() == currentDate.getFullYear()
      );
    }
    return tasks;
  }
}
