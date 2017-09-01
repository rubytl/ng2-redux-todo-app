import { combineReducers } from 'redux';
import persistState from 'redux-localstorage';
import { todoReducer } from './todo.reducer';
import { Todo } from '../todo/shared/Todo';
import { TodoDataService } from '../todo/shared/todo-data.service';

export class IAppState {
  todos?: Array<any>;
};

export const INITIAL_STATE: IAppState = {
  todos: []
};

export const rootReducer = combineReducers<IAppState>({
  todos: todoReducer
});

export const enhancers = [
  persistState('todos', { key: 'ng2-redux' })
];
