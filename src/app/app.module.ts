import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgReduxModule, DevToolsExtension } from 'ng2-redux';

import { TodoDataService } from './todo/shared/todo-data.service';
import { ApiService } from './shared/api.service';
import { AppComponent } from './start/app.component';
import { TodoComponent } from './todo/todo.component';
import { TodoListHeaderComponent } from './todo/todo-list-header/todo-list-header.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { TodoListItemComponent } from './todo/todo-list-item/todo-list-item.component';
import { TodoActions } from './actions/todo.actions';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoListHeaderComponent,
    TodoListComponent,
    TodoListItemComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonModule,
    NgReduxModule,
  ],
  providers: [
    TodoDataService,
    ApiService,
    DevToolsExtension,
    TodoActions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
