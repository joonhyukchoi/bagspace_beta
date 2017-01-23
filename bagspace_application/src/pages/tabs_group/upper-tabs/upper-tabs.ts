import { Component, trigger, state, style, transition, animate } from '@angular/core';
import { DatePicker } from 'ionic2-date-picker/ionic2-date-picker';

@Component({
  selector: 'page-upper-tabs',
  templateUrl: 'upper-tabs.html',
  animations: [
    trigger('Title', [      
      transition('close => open', [
        style({ opacity: 0 }), animate('900ms')
      ])      
    ]),    
    trigger('SlidMenu', [
      state('open', style({height: '101px'})),
      state('close', style({height: '0px'})),
      transition('open => close, close => open', animate('500ms ease-in ease-out'))
    ])
  ],
  providers: [ DatePicker ]
})
export class UpperTabsPage {   
search_click:string='close';
date:Date;
 constructor(public datePicker: DatePicker) {

    this.datePicker.onDateSelected.subscribe( 
      (date) => {
        console.log(date);
        this.date=new Date(date);
    });
  }
  showCalendar(){
    this.datePicker.showCalendar();
  }
}