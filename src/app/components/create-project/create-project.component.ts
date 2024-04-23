import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IProject } from 'src/app/models/project';
import { ITask } from 'src/app/models/task';
import { DataService } from 'src/app/services/data.service';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss'],
})
export class CreateProjectComponent implements OnInit {
  projects: IProject[] = [];
  constructor(
    private dataService: DataService,
    private modalService: ModalService
  ) {}

  form = new FormGroup({
    name: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  get name() {
    return this.form.controls.name as FormControl;
  }

  ngOnInit() {}
  submit() {
    let project: IProject = {
      name: this.form.value.name,
      tasks: new Array<ITask>(),
    };
    this.dataService.create(project);
    this.modalService.close();
  }
}
