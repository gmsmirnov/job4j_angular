import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.css']
})
export class StatisticComponent implements OnInit {

  tasksAll = 15;
  tasksPlanned = 5;
  tasksOverdue = 6;
  tasksFinished = 5;

  constructor() { }

  ngOnInit() {
  }

}
