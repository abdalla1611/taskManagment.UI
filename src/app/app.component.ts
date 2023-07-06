import { Component, OnInit } from '@angular/core';
import { coreResponse } from './models/coreResponse';
import { User } from './models/user';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  user = new User();
  showLogin = true;
  constructor(private authService : AuthService){}

  ngOnInit(): void {
    if (localStorage.getItem("JwtToken")){
      this.showLogin = false;
    }
  }

  register(user: User){
    this.authService.register(user).subscribe((response: coreResponse<number>)=>{
      if(!response.success){
        alert(response.message)
      }
    });
  }
  login(user: User){
    this.authService.login(user).subscribe((response: coreResponse<string>) =>{
      localStorage.setItem("JwtToken", response.data!);
      if(response.data){
        this.showLogin = false;

      }
      else{
        alert(response.message);
      }
    });
  }

  logout(){
    localStorage.clear()
    this.showLogin = true;
  }
}
