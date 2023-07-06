import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { User } from '../models/user';
import { environment } from 'src/environments/environment';
import { coreResponse } from '../models/coreResponse';


@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http: HttpClient) { 

  }
    public register(user : User) : Observable<coreResponse<number>> {

      return this.http.post<coreResponse<number>>(`${environment.API_BASE_URL}/Auth/Register`,user)

        
    }
    public login(user : User) : Observable<coreResponse<string>> {
      return this.http.post<coreResponse<string>>(`${environment.API_BASE_URL}/Auth/Login`,user)
    }
      
    public getAuthorizationToken(): string {

      const jwToken = localStorage.getItem("JwtToken");
      if (jwToken) {
        return "bearer " + jwToken;
      }
      return ""
  }

  
}
