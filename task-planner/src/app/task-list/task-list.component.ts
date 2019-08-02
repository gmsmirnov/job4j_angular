import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  addTask() {
    console.log('Задача создана!')
  }

  filterTasks($event) {
    console.log($event.target.checked);
  }
}
