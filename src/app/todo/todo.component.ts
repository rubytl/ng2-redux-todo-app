import { Component, OnInit } from '@angular/core';
import { Todo } from './shared/todo';
import { TodoDataService } from './shared/todo-data.service';

import { Observable } from 'rxjs/Observable';
import { NgRedux, select } from 'ng2-redux';
import { TodoActions } from '../actions/todo.actions';
import { IAppState } from '../store';

@Component({
    selector: 'todo-root',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.css'],
})

export class TodoComponent implements OnInit {
    @select('todos') todos$: Observable<Todo>;
    completedTodos$ = this.ngRedux.select(state => state.todos.filter(n => n.completed === true))
    todos: any;

    constructor(public todoActions: TodoActions, private ngRedux: NgRedux<IAppState>) { }

    ngOnInit() {
        this.todoActions.loadTodo();
    }

    private addTodo(todo) {
        this.todoActions.addTodo(todo);
    }
    private deleteTodo(todo) {
        this.todoActions.deleteTodo(todo.id);
    }
    private toggleCompletion(todo) {
        this.todoActions.toggleTodo(todo.id);
    }
    private toggleEditTodo(todo: Todo) {
        todo.editing = !todo.editing;
    }
    private deleteCompletedTodos() {
        this.todoActions.deleteCompletedTodos();
    }
    private stopEditing(todo: Todo, editedTitle: string) {
        this.todoActions.editTodo(todo.id, editedTitle);
        todo.editing = false;
    }

    private updateEditingTodo(todo: Todo, editedTitle: string) {
        editedTitle = editedTitle.trim();
        todo.editing = false;

        if (editedTitle.length === 0) {
            return;
        }
        this.todoActions.editTodo(todo.id, editedTitle);
    }

}

// export class TodoComponent implements OnInit {

//    todos: Todo[] = [];

//   constructor(
//     private todoDataService: TodoDataService
//   ) {
//   }

//   public ngOnInit() {
//     this.todoDataService
//       .getAllTodos()
//       .subscribe(
//         (todos) => {
//           this.todos = todos;
//         }
//       );
//   }

//   onAddTodo(todo) {
//     this.todoDataService
//       .addTodo(todo)
//       .subscribe(
//         (newTodo) => {
//           this.todos = this.todos.concat(newTodo);
//         }
//       );
//   }

//   onToggleTodoComplete(todo) {
//     this.todoDataService
//       .toggleTodoComplete(todo)
//       .subscribe(
//         (updatedTodo) => {
//           todo = updatedTodo;
//         }
//       );
//   }

//   onRemoveTodo(todo) {
//     this.todoDataService
//       .deleteTodoById(todo.id)
//       .subscribe(
//         (_) => {
//           this.todos = this.todos.filter((t) => t.id !== todo.id);
//         }
//       );
//   }
// }
