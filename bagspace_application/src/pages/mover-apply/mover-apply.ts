import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { DatePicker } from 'ionic2-date-picker/ionic2-date-picker'; //ionic2-date-picker
import { GoodsRegistrationPage } from '../receiver_group/goods-registration/goods-registration';

@Component({
  selector: 'page-mover-apply',
  templateUrl: 'mover-apply.html',
  providers: [ DatePicker ]
})
export class ReceiverDatePage {

  selected_Country: string;
  selected_City: string;
  selected_Landmark: string;

  selected_Date : Date = null;
  //달력 날짜 선택 확인
  isClick : boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public datePicker: DatePicker, 
  public alertCtrl: AlertController) {
    
     this.datePicker.onDateSelected.subscribe( 
      (date) => {
        this.selected_Date = new Date(date);
        //console.log(date);
        this.isDateSelect();
    });

  }

  showCalendar(){
    this.datePicker.showCalendar();
  }

  isDateSelect(){
    if(this.selected_Date != null){
      this.isClick = true;
    }
  }

  //다음 버튼
  moveNext(){

    if(this.isClick==false)
    this.calendarAlert();
  else
  this.navCtrl.push(GoodsRegistrationPage,{city:this.selected_City,country:this.selected_Country,landmark:this.selected_Landmark,date:this.selected_Date});
  }

  calendarAlert() {
    let alert = this.alertCtrl.create({
      title: '',
      subTitle: '날짜를 선택하세요',
      buttons: ['OK']
    });
    alert.present();
  }


}
