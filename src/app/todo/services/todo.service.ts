import { inject, Injectable } from '@angular/core';
import { Todo } from '../models/todo';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService { 
  private http = inject(HttpClient);
/*
  private todoId = 1;
  private todoList: Todo[] = [
    {
      id: this.todoId++,
      title: 'serve the app',
      completed: true,
    },
    {
      id: this.todoId++,
      title: 'familiarise yourself with the codebase',
      completed: false,
    },
    {
      id: this.todoId++,
      title: 'start talking to the api',
      completed: false,
    },
  ];
*/

  // TODO replace with a get request
 /* todos: Promise<Todo[]> = Promise.resolve(this.todoList);

  async addTodo(title: string): Promise<Todo> {
  
  */

  public getTodo(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${environment.apiUrl}`);
  }



    // TODO: replace with a POST request
   
    public AddTodo(t: Todo) {
      this.http.post(`${environment.apiUrl}`, t).subscribe((response) => {
        console.log('Server response:', response);
      });
    }
 /*   const todo = {
      id: this.todoId++,
      title: title,
      completed: false,
    };
    this.todoList.push(todo);

    return todo;
  }
*/
 // async updateTodo(updatedTodo: Todo): Promise<Todo> {
    public updateTodo(t: Todo): void {
      console.log(t);
      this.http.put(`${environment.apiUrl}/${t.id}`, t).subscribe((response) => {
        console.log('Server response:', response);
      });
    }
   
    // TODO: replace with a PUT request
    /*
    const foundTodo = this.todoList.find((todo) => todo.id === updatedTodo.id);
    if (!foundTodo) {
      throw new Error('todo not found');
    }
    Object.assign(foundTodo, updatedTodo);

    return foundTodo;*/
  }

