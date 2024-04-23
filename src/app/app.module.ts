import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { ProjectComponent } from './components/project/project.component';
import { TaskComponent } from './components/task/task.component';
import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { CapitalletterPipe } from './pipes/capitalletter.pipe';
import { SearchPipe } from './pipes/search.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from './components/modal/modal.component';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { CreateProjectComponent } from './components/create-project/create-project.component';
import { ModalService } from './services/modal.service';
import { FocusDirective } from './directives/focus.directive';
import { SearchTaskPipe } from './pipes/search-task.pipe';
import { FilterProjectByDatePipe } from './pipes/filter-project-by-date.pipe';
import { FilterTaskByDatePipe } from './pipes/filter-task-by-date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    ProjectComponent,
    TaskComponent,
    CapitalletterPipe,
    SearchPipe,
    ModalComponent,
    CreateTaskComponent,
    CreateProjectComponent,
    FocusDirective,
    SearchTaskPipe,
    FilterProjectByDatePipe,
    FilterTaskByDatePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [DataService, ModalService],
  bootstrap: [AppComponent],
})
export class AppModule {}
