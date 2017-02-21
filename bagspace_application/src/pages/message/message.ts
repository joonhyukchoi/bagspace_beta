import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Http, Headers} from '@angular/http';
import { NativeStorage,Device } from 'ionic-native';
import { ChatRoomPage } from '../receiver_group/chat-room/chat-room';

@Component({
  selector: 'page-message',
  templateUrl: 'message.html'
})
export class MessagePage {

  //초기 값 세팅
  selected_Mode : string = "리시버일때";
  receiver_List : string = "inquiry_List";
  mover_List : string ="inquiry_List";

  //ion-select value값
  receiver_Option : string = "리시버일때"; 
  mover_Option : string = "배달자일때";

  //DB에서 받아올 값. 네 가지 변수
  receiver_Inquiry = { image : '', id : ''}
  receiver_Matching = { image : '', id: ''}
  mover_Inquiry;
  mover_Matching;
  receiver_chat1;
  receiver_chat2;
  myid;
  bagspace_url;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http:Http) {
    NativeStorage.getItem('id')
    .then(data=> {this.myid=data.id;this.bagspace_url="http://thebagspace.com/mongo_test/chat/";this.getList();this.getList();}); 
  }

  


  ionViewDidLoad() {
  }
ionViewWillEnter() {this.getList();this.getList2();}
   getList(){

  this.http.get(this.bagspace_url+"1/"+this.myid)
  .subscribe(
    data=>{
      this.receiver_chat1 = data.json();
      console.log(data.json());
    },error =>{});
  }
   getList2(){

  this.http.get(this.bagspace_url+"2/"+this.myid)
  .subscribe(
    data=>{
      this.receiver_chat2 = data.json();
      console.log(data.json());
    },error =>{});
  }
  goChatRoom(goods_id:any,receiver_id:any,receiver_device_id:any){
    
    this.navCtrl.push(ChatRoomPage,{goods_id:goods_id,receiver_id:receiver_id,receiver_device_id:receiver_device_id});
  }
    goChatRoom2(goods_id:any){
    
    this.navCtrl.push(ChatRoomPage,{goods_id:goods_id});
  }  

}
