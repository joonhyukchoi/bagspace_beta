import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { DatePicker } from 'ionic2-date-picker/ionic2-date-picker';
import { NativeStorage } from 'ionic-native';
import { Http, Headers } from '@angular/http';
@Component({
  selector: 'page-mover-apply',
  templateUrl: 'mover-apply.html',
  providers: [ DatePicker ]
})
export class MoverApplyPage {

 
  save_data:any= { goods_id:'',id: '', device_id: '',date:''}
 
  selected_Date : Date = null;

  bagsapce_url;
  //달력 날짜 선택 확인
  isClick : boolean = false;

  apply_success : boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public datePicker: DatePicker, 
  public alertCtrl: AlertController,public http:Http) {
     this.bagsapce_url ="http://thebagspace.com/matching";
     NativeStorage.getItem('id')
    .then(data=> {this.save_data.id = data.id ;this.save_data.device_id=data.uuid;});  
     this.save_data.goods_id = navParams.get("id");
     this.datePicker.onDateSelected.subscribe( 
      (date) => {
        this.selected_Date = new Date(date);
        this.save_data.date = new Date(date).toLocaleDateString();
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
                 var headers = new Headers({'Content-Type': 'application/json'})
                 this.http.post(this.bagsapce_url+'/waiting_list', this.save_data,{headers: headers})
                  .subscribe(
                    data=> {
                    this.successMessage();
                  }
                );

                
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
