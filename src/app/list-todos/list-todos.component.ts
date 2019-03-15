import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';


export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) { }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[]
  message: string;

  constructor(private todoService: TodoDataService) { }

  ngOnInit() {
    this.refreshTodos();
  }

  refreshTodos(){
    this.todoService.retrieveAllTodos('in28minutes').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    );
  }


  deleteTodo(id) {
    console.log(`Delete of Todo ${id} `);
    this.todoService.deleteTodo('in28minutes', id).subscribe(
      response => {
        console.log(response);
        this.message = `Delete of Todo ${id} Successful!`;

        //refresh the list of the todos after deleteing a Todo
        this.refreshTodos();
      }
    );
  }

}
