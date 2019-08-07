import { Component, OnInit } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  // флаг для отображения завершенных заданий
  finished: boolean;

  // флаг для изменения блока создать / отредактировать задание
  isSelectedTask: boolean;

  editTask: Task;

  // сохраняем индекс переданного на редактирование задания
  selectedIndex: number;

  deleteSelected: boolean;


  tasks: Task[] = [
    new Task(
      'Пройти раздел \"Базовый синтаксис\"',
      'Angular',
      '14/07/2019',
      '25/07/2019',
      'Выполнено'
    ),
    new Task(
      'Пройти раздел \"Дериктивы и пайпы\"',
      'Angular',
      '26/07/2019',
      '02/08/2019',
      'Просрочено'
    ),
    new Task(
      'Пройти раздел \"Внедрение зависимостей\"',
      'Angular',
      '03/08/2019',
      '07/08/2019',
      'Запланировано'
    ),
    new Task(
      'Пройти раздел \"Маршрутизация, модули\"',
      'Angular',
      '08/08/2019',
      '10/08/2019',
      'Запланировано'
    ),
    new Task(
      'Пройти раздел \"Работа с формами\"',
      'Angular',
      '10/08/2019',
      '19/08/2019',
      'Запланировано'
    ),
    new Task(
      'Пройти раздел \"Работа с формами1\"',
      'Angular',
      '10/08/2019',
      '19/08/2019',
      'Запланировано'
    )
  ];

  constructor() {
  }

  ngOnInit() {
    this.isSelectedTask = false;
  }

  filterTasks($event) {
    console.log($event.target.checked);
    this.finished = $event.target.checked;
  }

  getTasksListSize() {
    return this.tasks.length;
  }

  getTasksAmountByStatus(status: string) {
    return (this.tasks.filter(task => task.status === status)).length;
  }

  deleteTaskFromArray(name: string) {
    let index = this.tasks.findIndex((task) => task.name === name);
    if (index > -1 && index != this.selectedIndex) {
      this.tasks.splice(index, 1);
      console.log('Задача ' + name + ' удалена!');
    } else {
      this.deleteSelected = true;
      console.log('Нельзя удалять редактируемую задачу!');
    }
  }

  addTaskToArray(task: Task) {
    this.tasks.push(task);
    console.log('Задача ' + task.name + ' создана!');
  }

  editTaskInArray(task: Task) {
    if (this.isSelectedTask) {
      this.tasks[this.selectedIndex] = task;
    }
    this.isSelectedTask = false;
    this.selectedIndex = -1;
    this.deleteSelected = false;
  }

  cancelEditTask() {
    this.isSelectedTask = false;
    this.selectedIndex = -1;
    this.deleteSelected = false;
  }

  editOn(task: Task) {
    if (!this.isSelectedTask) {
      this.selectedIndex = this.tasks.findIndex(item => item.name === task.name);
    }
    console.log('Индекс выделенной задачи ' + this.selectedIndex);
    this.isSelectedTask = true;
    this.editTask = task;
  }
}
