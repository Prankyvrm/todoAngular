import { Component, OnInit } from '@angular/core';

import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos :Todo[];
  
  constructor(private ts:TodoService) { }

  ngOnInit() {
  this.ts.getTodos().subscribe(todos=>{
    this.todos=todos;
  });
  
  }
  deleteTodo(todo:Todo){
    //Delete from UI
    this.todos=this.todos.filter(t=>t.id!=todo.id);
    //Delete from Server
    this.ts.deleteTodo(todo).subscribe();
  }
  addTodo(todo:Todo){
    this.ts.addTodo(todo).subscribe(todo=>{
      this.todos.push(todo);
    })
  }

}
