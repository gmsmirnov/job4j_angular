import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Task } from '../task.model';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent implements OnInit {
  @Output() addTaskEmitter = new EventEmitter<Task>();

  public newTaskForm: FormGroup;

  constructor() {
    this.newTaskForm = new FormGroup({
      name: new FormControl(null),
      category: new FormControl(null),
      dateStart: new FormControl(null),
      dateEnd: new FormControl(null)
    });
  }

  ngOnInit() {
  }

  addTask() {
    this.addTaskEmitter.emit(new Task(
      this.newTaskForm.get('name').value,
      this.newTaskForm.get('category').value,
      this.newTaskForm.get('dateStart').value,
      this.newTaskForm.get('dateEnd').value
    ));
    this.newTaskForm.reset();
  }
}
