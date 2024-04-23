import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IProject } from '../models/project';

@Injectable()
export class ModalService {
  isVisible$ = new BehaviorSubject<boolean>(false);
  type: 'task' | 'project';
  project: IProject;

  constructor() {}

  open(type: 'task' | 'project', project?: IProject) {
    this.isVisible$.next(true);
    this.type = type;
    this.project = project;
  }

  close() {
    this.isVisible$.next(false);
  }
}
