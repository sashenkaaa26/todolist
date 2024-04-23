import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IProject } from 'src/app/models/project';
import { ITask } from 'src/app/models/task';
import { DataService } from 'src/app/services/data.service';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss'],
})
export class CreateTaskComponent implements OnInit {
  @Input()
  project: IProject;
  constructor(
    private dataService: DataService,
    private modalService: ModalService
  ) {}

  form = new FormGroup({
    name: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    date: new FormControl<string>('', Validators.required),
    description: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    tags: new FormControl<string>('#', [
      Validators.required,
      Validators.minLength(5),
    ]),
    priority: new FormControl<number>(0, Validators.required),
  });

  // get name() {
  //   return this.form.controls.name as FormControl;
  // }

  ngOnInit() {}
  submit() {
    let task: ITask = {
      name: this.form.value.name,
      date: new Date(Date.parse(this.form.value.date)),
      description: this.form.value.description,
      tags: this.form.value.tags,
      priority: this.form.value.priority,
    };
    this.project.tasks.push(task);
    this.project.tasks.sort(function (a, b) {
      return a.priority - b.priority;
    });
    this.modalService.close();
  }
}
