import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AuthInterceptor } from './services/auth-Interceptor';
import { TodoComponent } from './components/todo/todo.component';
import { ShowTodoComponent } from './components/todo/show-todo/show-todo.component';
import { AddUpdateComponent } from './components/todo/add-update/add-update.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    ShowTodoComponent,
    AddUpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
