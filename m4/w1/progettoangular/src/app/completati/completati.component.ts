import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';
import { TodosService } from '../service/todos.service';
@Component({
  selector: 'app-completati',
  templateUrl: './completati.component.html',
  styleUrls: ['./completati.component.scss']
})
export class CompletatiComponent implements OnInit {

  tasks:Todo[] = []

  constructor(private ps:TodosService) {

  }

  ngOnInit(): void {
    this.tasks = this.ps.getTask()
  }

}
