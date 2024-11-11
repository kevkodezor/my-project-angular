import { Component } from '@angular/core';

@Component({
    standalone: true,
    selector: 'todo-list-item',
    templateUrl: './todo-list-item.component.html',
    styleUrl: './todo-list-item.component.css',
})
export class TodoListItem {
   todoList = [
       { description: 'Task 4', complete: true },
       { description: 'Task 3', complete: false },
       { description: 'Task 0', complete: true },
       { description: 'Task 2', complete: true },
       { description: 'Task 1', complete: true },
   ]
}