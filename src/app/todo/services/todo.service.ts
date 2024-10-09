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

  public getTodo(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${environment.apiUrl}`);
  }

  public AddTodo(t: string) {
    this.http
      .post(`${environment.apiUrl}`, { title: t, completed: false })
      .subscribe((response) => {
        console.log('Server response:', response);
      });
  }

  public updateTodo(t: Todo): void {
    console.log(t);
    this.http.put(`${environment.apiUrl}/${t.id}`, t).subscribe((response) => {
      console.log('Server response:', response);
    });
  }
}