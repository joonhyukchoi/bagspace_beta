import { Component, trigger, state, style, transition, animate } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DatePicker } from 'ionic2-date-picker/ionic2-date-picker';
<<<<<<< HEAD
import { NavController, NavParams } from 'ionic-angular';
import { ReceiverDetailPage } from '../../receiver_group/receiver-detail/receiver-detail';

=======
import {Http, Headers} from '@angular/http'
>>>>>>> camera
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
<<<<<<< HEAD
 constructor(public datePicker: DatePicker, public navCtrl: NavController, public navParams: NavParams) {
=======
data;
 constructor(public navCtrl: NavController, public navParams: NavParams,public datePicker: DatePicker, public http:Http) {
>>>>>>> camera

    this.datePicker.onDateSelected.subscribe( 
      (date) => {
        console.log(date);
        this.date=new Date(date);
    });
    
  }
 ionViewDidEnter() {
    this.getList();
    
  }
<<<<<<< HEAD

  showCalendar(){
    this.datePicker.showCalendar();
  }

  goDetailPage(){
    this.navCtrl.push(ReceiverDetailPage);
  }

=======
   ionViewWillEnter() {
    this.getList();
   }
   
  
  showCalendar(){
    this.datePicker.showCalendar();
  }
  getList(){
  this.http.get('/mongo_test/delivery/all')
  .subscribe(
    data=>{
      this.data = data.json();
      console.log(data.json());
    },
    error =>{

    }
  );
}
>>>>>>> camera
}