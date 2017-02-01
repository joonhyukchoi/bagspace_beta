import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
//import { Angular2AutoScroll } from 'angular2-auto-scroll/lib/angular2-auto-scroll.directive';

@Component({
  selector: 'page-chat-room',
  templateUrl: 'chat-room.html'
})
export class ChatRoomPage {

  isClick : boolean = false;

  //기본 유저 정보
  userId:any;

  //메시지 
  inputMessage: any = '';
  messages: any[]= [];
  currentTime: Date;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  send(){
    var msg = this.inputMessage;
    
    // 현재 시간 저장
    this.currentTime = new Date();
    var curTime = this.currentTime; 
    
    //메시지 전송 후, messages에 저장
    this.messages.push(msg);
    
    //전송 후 inputMessage 빈 칸 만들어 주기
    this.inputMessage = '';
  }

}
