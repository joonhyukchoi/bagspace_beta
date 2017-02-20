import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { DatePicker } from 'ionic2-date-picker/ionic2-date-picker';
import { MoverApply2Page } from '../mover-apply2/mover-apply2';

@Component({
  selector: 'page-mover-apply',
  templateUrl: 'mover-apply.html',
  providers: [ DatePicker ]
})
export class MoverApplyPage {

  selected_Country: string;
  selected_City: string;
  selected_Landmark: string;

  selected_Date : Date = null;
  selected_Departure : Date = null; //출발일
  selected_Arrival : Date = null;   //도착일

  //달력 날짜 선택 확인
  isClick : boolean = false;
  isClickDeparture : boolean = false;
  isClickArrival : boolean = false;

  apply_success : boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public datePicker: DatePicker, 
  public alertCtrl: AlertController) {
     
     this.datePicker.onDateSelected.subscribe( 
      (date) => {
          this.selected_Date = new Date(date);
        }
     );
     
  }


  departureClick(){
    this.datePicker.showCalendar();
    this.selected_Departure = this.selected_Date;
    this.isDateSelect();
    }

  arrivalClick(){
    this.datePicker.showCalendar();
    this.selected_Arrival = this.selected_Date;
    this.isDateSelect();
  }  
        

  isDateSelect(){
    if( (this.selected_Departure != null) && (this.selected_Arrival != null) ){
      this.isClick = true;
    }
  }

  calendarAlert() {
    let alert = this.alertCtrl.create({
      title: '',
      subTitle: '날짜를 선택하세요',
      buttons: ['OK']
    });
    alert.present();
  }

  //신청하기 버튼
  next() {
    if(this.isClick==false)
      this.calendarAlert();
    else{
       this.navCtrl.push(MoverApply2Page, this.selected_Departure, this.selected_Arrival);
      }
    }
 
}
