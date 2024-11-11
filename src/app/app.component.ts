import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoList } from "./todo/todo.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodoList],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'my-project-angular';
}
