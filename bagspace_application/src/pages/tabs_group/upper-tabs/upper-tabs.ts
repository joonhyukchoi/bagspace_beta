import { Component, trigger, state, style, transition, animate} from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { DatePicker } from 'ionic2-date-picker/ionic2-date-picker';
import { ReceiverDetailPage } from '../../receiver_group/receiver-detail/receiver-detail';
import {Http, Headers} from '@angular/http';
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
bagsapce_url;
url;
search_data:any={selected_Date: ''};
 constructor(public navCtrl: NavController, public navParams: NavParams,public datePicker: DatePicker, public http:Http, public modalCtrl:ModalController){
   //this.bagsapce_url ="http://thebagspace.com/mongo_test";
   this.bagsapce_url ="/mongo_test";
    this.datePicker.onDateSelected.subscribe( 
      (date) => {
        console.log(date);
        this.date=new Date(date); 
        console.log(this.date.toLocaleDateString());
        this.getList_filter();
    });    
  }

  
  ionViewWillEnter() {this.getList();}
  showCalendar(){this.datePicker.showCalendar();}

  goDetailPage(id:any){
    this.navCtrl.push(ReceiverDetailPage,{id:id});
    console.log(id);
  }

  getList(){
  this.http.get(this.bagsapce_url+'/delivery/all')
  .subscribe(
    data=>{
      this.data = data.json();
      console.log(data.json());
    },error =>{});
  }
  getList_filter(){
   
    if(this.select_city!=null&&this.search_data.date!=null){
       this.search_data.date = this.date.toLocaleDateString();
        this.url = this.bagsapce_url+'/delivery/search/'+this.search_data.date+'/'+this.select_city;
    }else if(this.select_city!=null){
      this.url = this.bagsapce_url+'/delivery/search_city/'+this.select_city;
    }else{
      this.search_data.date = this.date.toLocaleDateString();
      this.url = this.bagsapce_url+'/delivery/search_date/'+this.search_data.date;
    }
     this.http.get(this.url)
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
     this.getList_filter();
   }
   );
    modal.present();
  }

  place=SearchPlacePage;
}