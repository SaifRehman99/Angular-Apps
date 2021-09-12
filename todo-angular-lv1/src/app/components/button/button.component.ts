import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  // also like passing props
  @Input() text:string = ""
  @Input() color:string = ""

  // Emitting this btn click to the parent components just like props
  @Output() btnClick: EventEmitter<any> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  onClick():void{

    // emitting the event so that we can listent to it
    // we will call this onClick, then it will emit an event 
    this.btnClick.emit()
  }

}
