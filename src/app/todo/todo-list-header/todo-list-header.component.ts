import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Todo } from '../shared/todo';

@Component({
  selector: 'app-todo-list-header',
  templateUrl: './todo-list-header.component.html',
  styleUrls: ['../todo.component.css'],
})
export class TodoListHeaderComponent {

  newTodo: Todo = new Todo();

  @Output()
  add: EventEmitter<Todo> = new EventEmitter();

  addTodo() {
    this.add.emit(this.newTodo);
    this.newTodo = new Todo();
  }

}
