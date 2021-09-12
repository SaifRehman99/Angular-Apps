import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {IDATA} from "../../interface/data"
import {faTimes} from "@fortawesome/free-solid-svg-icons"

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input() data!: IDATA;
  faTimes = faTimes;
  @Output() deleteData:EventEmitter<IDATA> = new EventEmitter()
  @Output() toggleData:EventEmitter<IDATA> = new EventEmitter()
  
  constructor() { }

  ngOnInit(): void {
  }

  deleteTask(data:IDATA):void{
    this.deleteData.emit(data)
  }

  toggleReminder(data:IDATA){
    this.toggleData.emit(data)
  }

}
