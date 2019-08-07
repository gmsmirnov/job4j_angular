import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Task } from '../task.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
      name: new FormControl(null, [
        Validators.minLength(3),
        Validators.maxLength(50),
        Validators.required
      ]),
      category: new FormControl(null, [
        Validators.minLength(3),
        Validators.maxLength(50),
        Validators.required
      ]),
      dateStart: new FormControl(null, [
        Validators.pattern('(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\\d\\d'),
        Validators.required
      ]),
      dateEnd: new FormControl(null, [
        Validators.pattern('(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\\d\\d'),
        Validators.required
      ])
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
