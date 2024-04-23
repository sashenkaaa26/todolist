import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProject } from 'src/app/models/project';
import { DataService } from 'src/app/services/data.service';
import { ModalService } from 'src/app/services/modal.service';
import { ITask } from '../../models/task';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent {
  constructor(
    public dataService: DataService,
    public modalService: ModalService
  ) {}
  @Input()
  project: IProject;
  editable = false;
  showTasks = false;

  search = '';
  @Input()
  filter: 'day'| 'month' | 'all' = 'all';

  @Output() remove = new EventEmitter<IProject>();
  visibility: boolean = true;

  toggle() {
    console.log('toggle');
    this.visibility = !this.visibility;
    console.log('Project From toggle', this.project);
  }
  saveProject(name: string) {
    if (!name) return;
    this.editable = false;
    this.project.name = name;
  }
  removeTask(task: ITask) {
    this.project.tasks.splice(this.project.tasks.indexOf(task), 1);
  }
}
