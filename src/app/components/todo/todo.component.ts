import { Component, OnInit } from '@angular/core';
import { coreResponse } from 'src/app/models/coreResponse';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {

    // this.todoService.getTodos().subscribe((result:coreResponse<Todo[]>) =>{
    //   this.todos = result.data!;
    // })

  }

}
