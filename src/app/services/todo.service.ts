import { query } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { coreResponse } from '../models/coreResponse';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http : HttpClient) {

   }
   
   public async getTodos() : Promise<Observable<coreResponse<Todo[]>>>{
    
    return this.http.get<coreResponse<Todo[]>>(`${environment.API_BASE_URL}/Todo`);
    
  }
  public async addTodo(todo : Todo) : Promise<Observable<coreResponse<void>>>{
    
    return this.http.post<coreResponse<void>>(`${environment.API_BASE_URL}/Todo`, todo);
    
  }
  public async updateTodo(todo: Todo) : Promise<Observable<coreResponse<void>>>{
    
    return this.http.put<coreResponse<void>>(`${environment.API_BASE_URL}/Todo`,todo);
    
  }
  public async deleteTodo(id : number) : Promise<Observable<coreResponse<void>>>{
    
    return this.http.delete<coreResponse<void>>(`${environment.API_BASE_URL}/Todo/${id}`);
    
  }
  public async searchTodo(keyword: string) : Promise<Observable<coreResponse<Todo[]>>>{
    
    return this.http.get<coreResponse<Todo[]>>(`${environment.API_BASE_URL}/Todo/Search?query=${keyword}`);
    
  }
  public async filterTodo(date: string) : Promise<Observable<coreResponse<Todo[]>>>{
    
    return this.http.get<coreResponse<Todo[]>>(`${environment.API_BASE_URL}/Todo/Filter?query=${date}`);
    
  }

}
