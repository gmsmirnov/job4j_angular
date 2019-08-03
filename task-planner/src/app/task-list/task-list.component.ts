import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks = [
    {
      name: 'Пройти раздел \"Базовый синтаксис\"',
      category: 'Angular',
      dateStart: '14/07/2019',
      dateEnd: '25/07/2019',
      status: 'Выполнено'
    },
    {
      name: 'Пройти раздел \"Дериктивы и пайпы\"',
      category: 'Angular',
      dateStart: '26/07/2019',
      dateEnd: '02/08/2019',
      status: 'Просрочено'
    },
    {
      name: 'Пройти раздел \"Внедрение зависимостей\"',
      category: 'Angular',
      dateStart: '03/08/2019',
      dateEnd: '07/08/2019',
      status: 'Запланировано'
    },
    {
      name: 'Пройти раздел \"Маршрутизация, модули\"',
      category: 'Angular',
      dateStart: '08/08/2019',
      dateEnd: '10/08/2019',
      status: 'Запланировано'
    },
    {
      name: 'Пройти раздел \"Работа с формами\"',
      category: 'Angular',
      dateStart: '10/08/2019',
      dateEnd: '19/08/2019',
      status: 'Запланировано'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  addTask() {
    console.log('Задача создана!')
  }

  filterTasks($event) {
    console.log($event.target.checked);
  }

  getTasksListSize() {
    return this.tasks.length;
  }

  getTasksAmountByStatus(status: string) {
    return (this.tasks.filter(task => task.status === status)).length;
  }

  deleteTaskFromArray(name: string) {
    console.log('Задача ' + name + ' удалена');
  }
}
