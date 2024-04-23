import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IProject } from 'src/app/models/project';
import { ITask } from 'src/app/models/task';
import { ModalService } from 'src/app/services/modal.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss'],
})
export class ToDoListComponent implements OnInit {
  constructor(
    public dataService: DataService,
    public modalService: ModalService
  ) {}
  term = '';
  filter: 'day'  | 'month' | 'all' = 'all';

  ngOnInit(): void {
    this.dataService.getProjects().subscribe();
  }

  remove(project: IProject) {
    this.dataService.projects.splice(
      this.dataService.projects.indexOf(project),
      1
    );
  }

  filterItemsByDay() {
    this.filter = 'day';
  }
  filterItemsAll() {
    this.filter = 'all';
  }
  filterItemsByMonth() {
    this.filter = 'month';
  }
}
