import { Component } from '@angular/core';

@Component({
  selector: 'current-time',
  templateUrl: './current-time.component.html',
  styleUrls: ['./current-time.component.scss']
})
export class CurrentTimeComponent {

  currentDate: string = '';
  currentTime: string = '';

  constructor(){
    this.getCurrentDate();
    this.getCurrentTime();
  }

  getCurrentDate(){
    const date = new Date();
    this.currentDate = date.toLocaleDateString();
  }

  getCurrentTime(){
    const time = new Date();
    this.currentTime = time.toLocaleTimeString();
  }


}
