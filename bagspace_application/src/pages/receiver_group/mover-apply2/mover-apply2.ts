import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import {NativeStorage } from 'ionic-native';
import { Http, Headers } from '@angular/http';
@Component({
  selector: 'page-mover-apply2',
  templateUrl: 'mover-apply2.html'
})
export class MoverApply2Page {

  selected_Country: string;
  selected_City: string;
  selected_Landmark: string;

  departure_Place : string;         //출발 장소
  bagsapce_url;
  apply_success : boolean;
  save_data:any={id:'',device_id:'',goods_id:'',departure_date:'',arrival_date:'',departure_place:''}
   countries = [
    { name: '대한민국' },
    { name: '중국' },
    { name: '일본' },
    { name: '이스라엘' }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,public http:Http) {
    this.bagsapce_url ="http://thebagspace.com/matching/waiting_list";
    //this.bagsapce_url ="/matching/waiting_list";
    this.save_data.goods_id = navParams.get("goods_id");
    this.save_data.departure_date = navParams.get("departure_date");
    this.save_data.arrival_date = navParams.get("arrival_date");
    
    NativeStorage.getItem('id')
    .then(data=> {this.save_data.id = data.id ;this.save_data.device_id=data.uuid;});  
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
                    this.save_data.departure_place = this.departure_Place;
                     var headers = new Headers({'Content-Type': 'application/json'})
                    this.http.post(this.bagsapce_url, this.save_data,{headers: headers})
                    .subscribe(
                      data=> {
                         this.successMessage();
                      })
               
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
