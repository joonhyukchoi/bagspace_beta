import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
//import { Angular2AutoScroll } from 'angular2-auto-scroll/lib/angular2-auto-scroll.directive';

@Component({
  selector: 'page-chat-room',
  templateUrl: 'chat-room.html'
})
export class ChatRoomPage {

  /** 변수 **/
  count = 0;
  isClick : boolean = false;

  //메시지 
  inputMessage : any ='';
  
  messages : any[] = [];
  /*
  = 
  {
    id: '',
    msg: '',
    time: ''
  };
 */
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  send(){
    var msg = this.inputMessage;
    var currentTime = ""; // 현재 시간 저장
    //메시지 전송 후, messages에 저장
    this.messages.push(msg);
    //this.messages.push(); todo : 시간 저장
    console.log(msg);

    //전송 후 inputMessage 빈 칸 만들어 주기
    this.inputMessage = '';
  }

}
