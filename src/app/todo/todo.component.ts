import { Component } from '@angular/core';
import { TodoListItem } from './items/todo-list-item.component'

@Component({
    selector: 'todo-list',
    standalone: true,
    imports: [TodoListItem],
    template: `
    <ul>
      <todo-list-item></todo-list-item>
    </ul>
  `,
})
export class TodoList { }