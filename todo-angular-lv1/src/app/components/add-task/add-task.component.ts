import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  text:string = "";
  day:string = "";
  reminder:Boolean = false;

  @Output() addData : EventEmitter<any> = new EventEmitter()

  showAddTask: boolean = false
  subscription: Subscription;

  
  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTask = value));
  }


  ngOnInit(): void {
  }

  ngOnDestroy() {
    // Unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
}


  onSubmit(){
    if(!this.text){
      alert('Text add kro bro');
      return;
    }


    const newData = {
      text: this.text,
      day: this.day,
      reminder : this.reminder
    }

    console.log(newData)

  this.addData.emit(newData)


    this.text = ""
    this.day = ""
    this.reminder = false
  }



}
