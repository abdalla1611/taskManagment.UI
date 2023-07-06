import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-add-update',
  templateUrl: './add-update.component.html',
  styleUrls: ['./add-update.component.css']
})
export class AddUpdateComponent implements OnInit {


  constructor(private todoService: TodoService) { }

  @Input() todo : any;
  todoId!: number;
  todoTitle!: string;
  todoDescription!: string;
  todoDueDate!: string;

  ngOnInit(): void {

    this.todoId = this.todo.id;
    this.todoTitle = this.todo.title;
    this.todoDescription = this.todo.description;
    this.todoDueDate = this.todo.dueDate;
  }

  async edit() {
    var updatedTodo = {
      id: this.todoId,
      title: this.todoTitle,
      description: this.todoDescription,
      dueDate: this.todoDueDate
    };

    (await this.todoService.updateTodo(updatedTodo)).subscribe(res=>{
      alert(res.message);
    });
    
  }
    

    async add() {
      var newTodo = {
        title: this.todoTitle,
        description: this.todoDescription,
        dueDate: this.todoDueDate
      };
      
      (await this.todoService.addTodo(newTodo)).subscribe(res=>{
        alert(res.message);
      });
    }

}
