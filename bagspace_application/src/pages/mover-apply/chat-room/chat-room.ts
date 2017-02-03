import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-chat-room',
  templateUrl: 'chat-room.html',
})
export class ChatRoomPage {

  isClick : boolean = false;

  //기본 유저 정보
  myId:string = '123';
  userId:string = '';

  //메시지 
  inputMessage: string = '';
  inputMessageTime: Date = null;

  showMessage: string ='';

  //데이터베이스 data
  data:any= {userId: '123', messageText: 'test1', messageTime: '123'}
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  send(){
    
    // 메시지 전송 시간 저장
    this.inputMessageTime = new Date();
    //테스트용
    this.showMessage = this.inputMessage;

    /*DB로 전송
    this.data.messageText = this.inputMessage;
    this.data.messageTime = this.inputMessageTime;
    
    ...

    */

    //전송 후 inputMessage 빈 칸 만들어 주기
    this.inputMessage = '';
  }

}
