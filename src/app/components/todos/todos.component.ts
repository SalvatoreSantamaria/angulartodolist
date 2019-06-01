import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../../models/Todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor(private todoService: TodoService) { // initialize services and bind it to the TodoService

  }

  ngOnInit() {
   // this.todos = this.todoService.getTodos(); was for placeholder, but can do this anymore because it is asynchronus
    this.todoService.getTodos().subscribe(todos => {// think of .subscribe as .then
      this.todos = todos;
    });
  }

}
