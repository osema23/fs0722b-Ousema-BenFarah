import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
nome!: 'Component Child' ;

  constructor() { }

  ngOnInit(): void {
  }

}
