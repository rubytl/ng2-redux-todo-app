import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Todo } from '../todo';
import { TodoListHeaderComponent } from './todo-list-header.component';

describe('TodoListHeaderComponent', () => {
  let component: TodoListHeaderComponent;
  let fixture: ComponentFixture<TodoListHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoListHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

     it(`should have a newTodo todo`, async(() => {
        let fixture = TestBed.createComponent(TodoListHeaderComponent);
        let app = fixture.debugElement.componentInstance;
        expect(app.newTodo instanceof Todo).toBeTruthy()
    }));
});
