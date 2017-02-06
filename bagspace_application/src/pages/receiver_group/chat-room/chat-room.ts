import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http, Headers } from '@angular/http';
@Component({
  selector: 'page-chat-room',
  templateUrl: 'chat-room.html',
})
export class ChatRoomPage {

  isClick : boolean = false;

  //기본 유저 정보
  myId:Number = 123;
  userId:string = '';

  //메시지 
  inputMessage: string = '';
  inputMessageTime: Date = null;

  showMessage: string ='';

  //데이터베이스 data
  save_data:any= { id:'',messageText: '', messageTime: ''}
  data;

  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http) {
  
 }
   ionViewWillEnter() {
 this.getList();
}
  send(){
    
    // 메시지 전송 시간 저장
    this.inputMessageTime = new Date();
   

    this.save_data.id=123;
    this.save_data.messageText = this.inputMessage;
    this.save_data.messageTime = this.inputMessageTime;
    this.inputMessage = '';
    var headers = new Headers({'Content-Type': 'application/json'})
    this.http.post('http://thebagspace.com/mongo_test/chat', this.save_data,{headers: headers})
    .subscribe(
      data=> {
        this.save_data = data.json();
        this.getList();
      }
    )

  }
getList(){
  this.http.get('http://thebagspace.com/mongo_test/chat')
  .subscribe(
    data=>{
      this.data = data.json();
      console.log(data.json());
    },
    error =>{

    }
  );
}
}
