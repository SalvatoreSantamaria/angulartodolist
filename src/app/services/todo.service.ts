import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from '../models/Todo';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json' // takes in object with whatever heads we want to send (application/json in this case)
  })
};

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosUrl: string = 'https://jsonplaceholder.typicode.com/todos';
  todosLimit = '?_limit=15';

  constructor(private http: HttpClient) { }

  // Get Todos from JSON placeholder
  getTodos(): Observable<Todo[]> { // type is Observable
   // return this.http.get<Todo[]>(this.todosUrl);
    return this.http.get<Todo[]>(`${this.todosUrl}${this.todosLimit}`);
   // using the template literals to replace https://jsonplaceholder.typicode.com/todos?_limit=5

    // dummy placeholder
    // return [
    //   {
    //     id: 1,
    //     title: 'Todo One',
    //     completed: false
    //   },
    //   {
    //     id: 2,
    //     title: 'Todo Two',
    //     completed: true
    //   },
    //   {
    //     id: 3,
    //     title: 'Todo Three',
    //     completed: false
    //   }
    // ];
  }

  // Delete Todo from the server
  deleteTodo(todo: Todo): Observable<Todo>{
    const url = `${this.todosUrl}/${todo.id}`; // deleting a specific todo
    return this.http.delete<Todo>(url, httpOptions);
  }

  // Toggle Completed
  toggleCompleted(todo: Todo): Observable<any> { // takes in todo (type is Todo), and returns observable
    const url = `${this.todosUrl}/${todo.id}`; // updating a specific todo
    return this.http.put(url, todo, httpOptions); // passing in url, todo, and httpOptions
  }
}
