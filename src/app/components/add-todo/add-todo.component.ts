import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  title:string;
  @Output() addTodo:EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  onAddTodo() {
    const todo={
      title:this.title,
      completed:false
    }
    this.addTodo.emit(todo);
  }

}