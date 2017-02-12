import { Component, trigger, state, style, transition, animate, ViewChild,Input} from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { DatePicker } from 'ionic2-date-picker/ionic2-date-picker';
import { ReceiverDetailPage } from '../../receiver_group/receiver-detail/receiver-detail';
import {Http} from '@angular/http';
import { SearchPlacePage } from '../search-place/search-place';


@Component({
  selector: 'page-upper-tabs',
  templateUrl: 'upper-tabs.html',
  providers: [ DatePicker],
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
  ] 
})

export class UpperTabsPage {   
select_city;
select_country;
search_click:string='close';
date:Date;
data;

 constructor(public navCtrl: NavController, public navParams: NavParams,public datePicker: DatePicker, public http:Http, public modalCtrl:ModalController){
    this.datePicker.onDateSelected.subscribe( 
      (date) => {
        console.log(date);
        this.date=new Date(date);   
    });    
  }

  ionViewDidEnter() {this.getList(); }
  ionViewWillEnter() {this.getList();}
  showCalendar(){this.datePicker.showCalendar();}

  goDetailPage(id:any){
    this.navCtrl.push(ReceiverDetailPage,{id:id});
    console.log(id);
  }

  getList(){
  this.http.get('/mongo_test/delivery/all')
  .subscribe(
    data=>{
      this.data = data.json();
      console.log(data.json());
    },error =>{});
  }

   openModal(page) {
    let modal = this.modalCtrl.create(page);
     modal.onDidDismiss(data => {
     this.select_city=data.city;
     this.select_country=data.country;
   });
    modal.present();
  }

  place=SearchPlacePage;
}