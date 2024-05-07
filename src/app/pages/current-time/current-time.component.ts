import { Component } from '@angular/core';

@Component({
  selector: 'current-time',
  templateUrl: './current-time.component.html',
  styleUrls: ['./current-time.component.scss']
})
export class CurrentTimeComponent {

  currentDate: string = '';

  constructor(){
    this.getCurrentDate();
  }

  getCurrentDate(){
    const date = new Date();
    this.currentDate = date.toLocaleDateString();
  }


}
