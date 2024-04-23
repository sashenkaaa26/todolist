import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Data } from '@angular/router';
import { IProject } from 'src/app/models/project';
import { ITask } from 'src/app/models/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  @Input()
  task: ITask;
  editable = false;
  description = false;

  @Output() removeTask = new EventEmitter<ITask>();
  visibility: boolean = true;

  toggle() {
    this.visibility = !this.visibility;
  }
  saveTask(name: string) {
    if (!name) return;
    this.editable = false;
    this.task.name = name;
  }
  saveDescription(description: string) {
    if (!description) return;
    this.editable = false;
    this.task.description = description;
  }
  saveTag(tags: string) {
    if (!tags) return;
    this.editable = false;
    this.task.tags = tags;
  }
}
