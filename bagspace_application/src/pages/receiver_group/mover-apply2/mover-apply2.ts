import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-mover-apply2',
  templateUrl: 'mover-apply2.html'
})
export class MoverApply2Page {

  selected_Country: string;
  selected_City: string;
  selected_Landmark: string;

  departure_Place : string;         //출발 장소

  apply_success : boolean;

   countries = [
    { name: '대한민국' },
    { name: '중국' },
    { name: '일본' },
    { name: '이스라엘' }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {}

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
    if(this.apply_success==true)
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
