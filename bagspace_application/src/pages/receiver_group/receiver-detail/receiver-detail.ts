import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ChatRoomPage } from '../chat-room/chat-room';
import { MoverApplyPage } from '../mover-apply/mover-apply';
import {Http, Headers} from '@angular/http'
import { MapPage } from '../map/map';

@Component({
  selector: 'page-receiver-detail',
  templateUrl: 'receiver-detail.html'
})
export class ReceiverDetailPage {
  selected_id: any;
  dueDate:any = '2017년 2월 3일'; //기한 날짜
  deliveryPlace:any = '한국';     //배달 장소
  totalPrice:any = '';            //총 구매 가격
  item;
  bagsapce_url;
  data:any[] =
  [ 
    {item_Name: '', item_Picture: '', item_Link: '', item_Price: '', item_Benefit: ''},
    {item_Name: '', item_Picture: '', item_Link: '', item_Price: '', item_Benefit: ''}
  ];
  //통합 : 물품 목록, 날짜, 장소, 총 가격
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,public http:Http) {
    this.selected_id = navParams.get("id");
    this.bagsapce_url ="/mongo_test";
     //this.bagsapce_url ="http://thebagspace.com/mongo_test";
    
    this.getItem();
    
  }

 

  goChatRoom(){
    this.navCtrl.push(ChatRoomPage);
  } 

  join() {
     this.navCtrl.push(MoverApplyPage);
  }

  //todo : map 기능 추가
  showMap(){
    /*
      let map = this.alertCtrl.create({
      title: 'todo: 나중에 map 기능 넣기!',
      message: '',
      buttons: [
        {
          text: 'OK',
        }]
      });
    map.present();*/
   this.navCtrl.push(MapPage);

  }
getItem(){
  this.http.get(this.bagsapce_url+'/delivery/detail/'+this.selected_id)
  .subscribe(
    data=>{
      this.item = data.json();
      console.log(data.json());
    },
    error =>{

    }
  );
}
}
