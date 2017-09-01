import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../store';
import { TodoDataService } from '../todo/shared/todo-data.service';
import { Todo } from '../todo/shared/Todo';

@Injectable()
export class TodoActions {
  constructor(private ngRedux: NgRedux<IAppState>,
    private todoDataService: TodoDataService) { }

  static LOAD_TODO: string = 'LOAD_TODO';
  static ADD_TODO: string = 'ADD_TODO';
  static DELETE_TODO: string = 'DELETE_TODO';
  static EDIT_TODO: string = 'EDIT_TODO';
  static TOGGLE_TODO: string = 'TOGGLE_TODO';
  static DELETE_COMPLETED_TODOS: string = 'DELETE_COMPLETED_TODOS';

  loadTodo(): void {
    this.todoDataService.getAllTodos()
      .subscribe(
      (todos) => {
        this.ngRedux.dispatch({
          type: TodoActions.LOAD_TODO,
          payload: todos
        });
      });
  }

  addTodo(todo): void {
    this.todoDataService.addTodo(todo)
      .subscribe(
      (newTodo) => {
        this.ngRedux.dispatch({
          type: TodoActions.ADD_TODO,
          payload: newTodo
        });
      });
  }

  deleteTodo(id: number): void {
    this.todoDataService.deleteTodoById(id)
      .subscribe(
      (newTodo) => {
        this.ngRedux.dispatch({
          type: TodoActions.DELETE_TODO,
          id: id
        });
      });
  }

  toggleTodo(id: number): void {
    this.ngRedux.dispatch({ type: TodoActions.TOGGLE_TODO, id: id });
  }
  
  editTodo(id: number, editedTitle: String): void {
    this.ngRedux.dispatch({ type: TodoActions.EDIT_TODO, id: id, title: editedTitle });
  }
  
  deleteCompletedTodos(): void {
    this.ngRedux.dispatch({ type: TodoActions.DELETE_COMPLETED_TODOS });
  }
}

export interface ITodoAction {
  type: string;
  payload: any;
  id: number;
  title?: string;
}
