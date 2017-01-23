import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ScheduleModule } from 'primeng/primeng';
import { AlertController } from 'ionic-angular';
//import {Calendar} from 'ionic-native';

//ionic2-date-picker
import { DatePicker } from 'ionic2-date-picker/ionic2-date-picker';

@Component({
  selector: 'page-receiver-date',
  templateUrl: 'receiver-date.html',
  providers: [ DatePicker ]
})
export class ReceiverDatePage {

  selectedDate : any = null;
  //달력 날짜 선택 확인
  isClick : boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public datePicker: DatePicker, 
  public alertCtrl: AlertController) {
    
     this.datePicker.onDateSelected.subscribe( 
      (date) => {
        this.selectedDate = date;
        //console.log(date);
        this.isDateSelect();
    });

  }

  showCalendar(){
    this.datePicker.showCalendar();
  }

  isDateSelect(){
    if(this.selectedDate != null){
      this.isClick = true;
    }
  }

  //다음 버튼
  moveNext(){
    if(this.selectedDate != null){
      this.navCtrl.push(ReceiverDatePage);
    }
    else{
      this.calendarAlert();
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

}
