import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  constructor() { }

  ngOnInit() {
  }

// Set Dynamic Classes
  setClasses() {
    const classes = {
      todo: true,
      'is-complete': this.todo.completed // this.todo comes from the input. 'is-completed' has to be in quotes because it is hypenated
    };
    return classes;
  }
  onToggle(todo) {
    console.log('toggle');
    todo.completed = !todo.completed; // setting this to whatever it is not
  }

  onDelete(todo) {
    console.log('delete');

  }
}
