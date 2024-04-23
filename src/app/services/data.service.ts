import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, map, take } from 'rxjs';
import { IProject } from '../models/project';

@Injectable()
export class DataService {
  constructor(private http: HttpClient) {}
  projects: IProject[] = [];

  public getProjects(): Observable<IProject[]> {
    return this.http.get<IProject[]>('../../assets/projects.json').pipe(
      tap((projects) => {
        this.projects = projects;
        projects.forEach((project) => {
          project.tasks.sort(function (a, b) {
            return a.priority - b.priority;
          });
          project.tasks.forEach((task) => {
            task.date = new Date(task.date);
          });
        });
      })
    );
  }

  create(project: IProject): IProject {
    this.projects.push(project);
    return project;
  }
}
