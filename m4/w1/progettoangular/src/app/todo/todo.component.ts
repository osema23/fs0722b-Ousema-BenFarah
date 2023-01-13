import { Component, OnInit } from '@angular/core';
import { Todo } from './../todo';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  todos:Todo[] = [];

  inputTodo:string ="";

  constructor() {}

  ngOnInit(): void {

    this.todos = [
      {
        id: 1,
        title : 'first todo',
        completed : false
      },
      {
        id: 2,
        title: 'second todo',
        completed: true
      }
    ]
  }

  toggleDone (id:number){
    this.todos.map((v, i) => {
      if (i == id) v.completed = !v.completed;
      return v;
    })
  }

  deleteTodo (id:number) {
    this.todos = this.todos.filter((v, i)=> i !=id);
  }

  addTodo () {
     this.todos.push({
      title: this.inputTodo,
      id:1,
      completed: false
    });

    this.inputTodo = "";
  }

}
