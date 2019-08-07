import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Task } from '../task.model';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {
  @Input() task: Task;

  @Output() cancelEmitter = new EventEmitter();
  @Output() saveTaskEmitter = new EventEmitter<Task>();

  public editTaskForm: FormGroup;

  constructor() {
  }

  // инициализация полей редактируемой задачи
  ngOnInit() {
    this.editTaskForm = new FormGroup({
      name: new FormControl(this.task.name, [
        Validators.minLength(3),
        Validators.maxLength(50),
        Validators.required
      ]),
      category: new FormControl(this.task.category, [
        Validators.minLength(3),
        Validators.maxLength(50),
        Validators.required
      ]),
      dateStart: new FormControl(this.task.dateStart, [
        Validators.pattern('(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\\d\\d'),
        Validators.required
      ]),
      dateEnd: new FormControl(this.task.dateEnd, [
        Validators.pattern('(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\\d\\d'),
        Validators.required
      ])
    });
  }

  // сохранение редактируемой задачи
  save() {
    this.saveTaskEmitter.emit(new Task(
      this.editTaskForm.get('name').value,
      this.editTaskForm.get('category').value,
      this.editTaskForm.get('dateStart').value,
      this.editTaskForm.get('dateEnd').value
    ));
    this.editTaskForm.reset();
  }

  // отмена сохранения редактируемой задачи
  cancel() {
    this.cancelEmitter.emit();
  }
}
