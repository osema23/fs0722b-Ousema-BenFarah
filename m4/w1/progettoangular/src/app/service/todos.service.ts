import { Injectable } from '@angular/core';
import { Todo } from '../todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  allTasks = [
    {id: 0,
    title: "",
    completed: true
    }
  ]

  constructor() { }

  getTask():Todo[]{
    return this.allTasks
  }
}
