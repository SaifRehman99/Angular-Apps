import { Component, OnInit } from '@angular/core';
import {IDATA} from "../../interface/data";
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  datas: IDATA[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {

    this.dataService.getData().subscribe(datas => this.datas  = datas)
  }


  onDataDelete(data:IDATA ){

    this.dataService.deleteData(data).subscribe(() => this.datas = this.datas.filter(d => d.id != data.id))
  }

  onToggle(data:IDATA){
    data.reminder = !data.reminder;
    this.dataService.toggleData(data).subscribe()
  }

  onDataAdd(data: IDATA){

    this.dataService.addData(data).subscribe(() => this.datas.push(data))

  }


}
