import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  constructor(private todoService: TodoService) { }

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
    // toggle in UI
    console.log('toggle');
    todo.completed = !todo.completed; // setting this to whatever it is not

    // update server toggle
    this.todoService.toggleCompleted(todo).subscribe(todo => {
      console.log(todo);
    });

  }

  onDelete(todo) {
    console.log('delete');

  }
}
