import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list-row',
  templateUrl: './list-row.component.html',
  styleUrls: ['./list-row.component.css']
})
export class ListRowComponent implements OnInit {

  @Input() name: string;
  @Input() category: string;
  @Input() dateStart: string;
  @Input() dateEnd: string;
  @Input() status: string;

  @Output() deleteTaskEmitter = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  deleteTask() {
    this.deleteTaskEmitter.emit(this.name);
  }
}
