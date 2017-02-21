import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  


  ionViewDidLoad() {
  }

}
