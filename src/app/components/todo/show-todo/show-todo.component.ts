import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-show-todo',
  templateUrl: './show-todo.component.html',
  styleUrls: ['./show-todo.component.css']
})
export class ShowTodoComponent implements OnInit {

  constructor(private todoService: TodoService) {}

  todos_list: Todo[] = [];
  ModalTitle: any;
  activateAddUpdate: boolean = false;
  todo : Todo = new Todo();
  dateFilter = "";
  keyword = "";
  todos_list_without_filter: Todo[] = []

  async ngOnInit(): Promise<void> {
    await this.refreshList()
  }

  closeClick() {
    this.activateAddUpdate = false;
    this.refreshList();
  }

  async refreshList(){
      (await this.todoService.getTodos()).subscribe(res=>{
        this.todos_list = res.data!;
        this.todos_list_without_filter = res.data!;
      })
  }

  async deleteTodo(id: number) {
    if(confirm("are you sure ??")){
      (await this.todoService.deleteTodo(id)).subscribe(res=>{
        alert(res.message);
      });
    }
  }
  
  editTodo(todo: Todo) {
    this.todo = todo;
    this.activateAddUpdate = true ;
    this.ModalTitle = "edit Todo";
  }

  addTodo() {

    this.todo = {
      id: 0,
      title:"",
      description:"",
      dueDate: ""
    }

    this.ModalTitle = "add To do";
    this.activateAddUpdate = true;
  }

  ListFilter(){
    var dateFilter = this.dateFilter;
    var keyword = this.keyword.trim().toLowerCase();

    this.todos_list = this.todos_list_without_filter.filter(todo =>{
      return (
        !dateFilter || 
        (new Date(todo.dueDate).toLocaleDateString() === new Date(this.dateFilter).toLocaleDateString())
      )&&(
        !keyword ||
        todo.description.trim().toLowerCase().includes(keyword) ||
        todo.title.trim().toLowerCase().includes(keyword)
      )
    })
    console.log(this.todos_list)
  }

}
