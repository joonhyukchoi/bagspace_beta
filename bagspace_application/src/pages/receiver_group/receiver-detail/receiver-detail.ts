import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ChatRoomPage } from '../chat-room/chat-room';
import { MoverApplyPage } from '../mover-apply/mover-apply';

@Component({
  selector: 'page-receiver-detail',
  templateUrl: 'receiver-detail.html'
})
export class ReceiverDetailPage {

  dueDate:any = '2017년 2월 3일'; //기한 날짜
  deliveryPlace:any = '한국';     //배달 장소
  totalPrice:any = '';            //총 구매 가격

  data:any[] =
  [ 
    {item_Name: '', item_Picture: '', item_Link: '', item_Price: '', item_Benefit: ''},
    {item_Name: '', item_Picture: '', item_Link: '', item_Price: '', item_Benefit: ''}
  ]
  //통합 : 물품 목록, 날짜, 장소, 총 가격
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.test();
  }

  //test
  test(){
    this.data[0].item_Name = '노트북';
    this.data[0].item_Picture = '../../assets/img/notebook_test.jpg';
    this.data[0].item_Link = 'www.notebook.com';
    this.data[0].item_Price = '2000000';
    this.data[0].item_Benefit = '20000';

    this.data[1].item_Name = 'Kitkat';
    this.data[1].item_Picture = '../../assets/img/kitkat_test.jpg';
    this.data[1].item_Link = 'www.kitkat.com';
    this.data[1].item_Price = '20000';
    this.data[1].item_Benefit = '200';
  }

  goChatRoom(){
    this.navCtrl.push(ChatRoomPage);
  } 

  join() {
     this.navCtrl.push(MoverApplyPage);
  }

  //todo : map 기능 추가
  showMap(){
      let map = this.alertCtrl.create({
      title: 'todo: 나중에 map 기능 넣기!',
      message: '',
      buttons: [
        {
          text: 'OK',
        }]
      });
    map.present();
  }

}
