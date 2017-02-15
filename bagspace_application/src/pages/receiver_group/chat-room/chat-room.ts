import { Component, ViewChild} from '@angular/core';
import { NavController, NavParams, Content, Platform } from 'ionic-angular';
import { Http, Headers } from '@angular/http';
import { Keyboard } from 'ionic-native';

@Component({
  selector: 'page-chat-room',
  templateUrl: 'chat-room.html',
})

export class ChatRoomPage{
@ViewChild(Content) content : Content;

  isClick: boolean = false;
  isKeyboardUp: boolean = false;

  //기본 유저 정보
  myId:Number = 123;
  userId:string = '';

  //메시지 
  inputMessage: string = '';
  inputMessageTime: Date = null;

  bagsapce_url;
  showMessage: string ='';



  save_data:any= { id:'',messageText: '', messageTime: ''}
  data;


  constructor(public navCtrl: NavController, public navParams: NavParams, public http:Http, 
  platform: Platform){  
      this.bagsapce_url ="http://thebagspace.com/mongo_test";
      //this.bagsapce_url ="/mongo_test";
//키보드 나타날 때, 메시지 맨 밑으로 내리기 : 키보드가 올라가면 대화가 가려지기 때문에,,,
    platform.ready().then(() => {
        Keyboard.onKeyboardShow().subscribe(() => {
            this.ScrollTo();
        });
    });

  }


  ionViewWillEnter() {
    console.log("ionViewWillEnter-getList");
    this.getList();
  }

  ionViewDidLoad(){
    setTimeout(() => {
      this.ScrollTo();
    }, 300);
  }

  ScrollTo(){
    this.content.scrollToBottom();
  }

  send(){
    
    // 메시지 전송 시간 저장
    this.inputMessageTime = new Date();

    this.save_data.id=123;
    this.save_data.messageText = this.inputMessage;
    this.save_data.messageTime = this.inputMessageTime;
    
    this.inputMessage = '';

    
    var headers = new Headers({'Content-Type': 'application/json'})
    this.http.post(this.bagsapce_url+'/chat', this.save_data,{headers: headers})
    .subscribe(
      data=> {
        this.save_data = data.json();
        this.getList();
      }
    );
     setTimeout(() => {
      console.log("timeout");
      this.ScrollTo();
    }, 200);
  }

getList(){
  this.http.get(this.bagsapce_url+'/chat')
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
