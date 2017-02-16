import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { DatePicker } from 'ionic2-date-picker/ionic2-date-picker';

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

  departure_Place : string;         //출발 장소

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
      });
  }

  test(){
    console.log(this.departure_Place);
  }

  departureClick(){
    this.datePicker.showCalendar();
    //this.isClickDeparture = true;
    console.log(this.selected_Date);
    
  }

  arrivalClick(){
    this.datePicker.showCalendar();
     console.log(this.selected_Date);
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
  join() {
    if(this.isClick==false)
      this.calendarAlert();
    else{
        let confirm = this.alertCtrl.create({
          title: '정말 참여하시겠습니까?',
          message: '',
          buttons: [
            {
              text: '취소',
              handler: () => {
              }
            },
            {
              text: '참여하기',
              handler: () => {
                this.successMessage();
              }
            }
          ]
        });
        confirm.present();
      }
    }
  successMessage(){
      let success = this.alertCtrl.create({
      title: '신청되었습니다.',
      message: '',
      buttons: [
        {
          text: 'OK',
          handler: () => {
          this.navCtrl.popToRoot();
          }
        }
      ]

      });
    success.present();
  }

}
