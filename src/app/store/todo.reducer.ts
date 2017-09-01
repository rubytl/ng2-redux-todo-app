import { TodoActions, ITodoAction } from '../actions/todo.actions';
import { Todo } from '../todo/shared/Todo';
import { INITIAL_STATE } from '../store';
import { TodoDataService } from '../todo/shared/todo-data.service';

export function todoReducer(state: Array<any> = INITIAL_STATE.todos,
  action: ITodoAction): Array<Todo> {
  if (!state) {
    return [];
  }
  switch (action.type) {
    case TodoActions.LOAD_TODO:
      return state = action.payload;
    case TodoActions.ADD_TODO:
      return state.concat(action.payload);
    case TodoActions.EDIT_TODO:
      Object.assign({}, state, {
        state: state.map((todo, index) => {
          if (todo.id === action.id) {
            todo.title = action.title;
          }
          return todo
        })
      });
      return state;
    case TodoActions.DELETE_TODO:
      return state.filter(todo => todo.id !== action.id);
    case TodoActions.TOGGLE_TODO:
      Object.assign({}, state, {
        state: state.map((todo, index) => {
          if (todo.id === action.id) {
            todo.completed = !todo.completed;
          }
          return todo
        })
      });
      return state;
    case TodoActions.DELETE_COMPLETED_TODOS:
      return state.filter(todo => todo.completed === false);
    default:
      return state;
  }
}
