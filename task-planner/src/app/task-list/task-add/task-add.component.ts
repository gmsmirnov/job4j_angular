import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../task.model';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent implements OnInit {
  @Input() name: string;
  @Input() category: string;
  @Input() dateStart: string;
  @Input() dateEnd: string;

  @Output() addTaskEmitter = new EventEmitter<Task>();

  constructor() { }

  ngOnInit() {
  }

  addTask() {
    this.addTaskEmitter.emit(new Task(this.name, this.category, this.dateStart, this.dateEnd));
    this.name = '';
    this.category = '';
    this.dateStart = '';
    this.dateEnd = '';
  }
}
