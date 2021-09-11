import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todos';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];
  content: string = '';

  constructor() {}

  ngOnInit(): void {
    this.todos = [
      {
        content: 'First Todo',
        completed: true,
      },
      {
        content: 'Washing',
        completed: false,
      },
      {
        content: 'Bath',
        completed: false,
      },
      {
        content: 'Coding',
        completed: false,
      },
    ];
  }

  toggleDone(id: number): void {
    this.todos.map((t, i) => {
      if (i == id) t.completed = !t.completed;
      return t;
    });
  }

  deleteTodo(id: number): void {
    this.todos = this.todos.filter((t, i) => i != id);
  }

  addTodo(): void {
    this.todos.push({
      content: this.content,
      completed: false,
    });
    this.content = '';
  }
}
