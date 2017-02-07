import { Component, ViewChild} from '@angular/core';
import { NavController, NavParams, Content } from 'ionic-angular';
import { Http, Headers } from '@angular/http';

@Component({
  selector: 'page-chat-room',
  templateUrl: 'chat-room.html',
})

export class ChatRoomPage{
@ViewChild(Content) content : Content;

  isClick : boolean = false;

  //기본 유저 정보
  myId:Number = 123;
  userId:string = '';

  //메시지 
  inputMessage: string = '';
  inputMessageTime: Date = null;

  showMessage: string ='';

  save_data:any= { id:'',messageText: '', messageTime: ''}
  data;

  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http) {
    console.log("constructor");
  }
 
  ionViewWillEnter() {
    console.log("ionViewWillEnter-getList");
    this.getList();
  }

  ionViewDidEnter(test){
    //console.log("ionViewDidEnter-scroll");
     //this.ScrollTo();
  }

  ionViewDidLoad(){
    setTimeout(() => {
      console.log("timeout");
      this.ScrollTo();
    }, 300);

    console.log("ionViewDidLoad-scroll");
    
  }

  ScrollTo(){
    //this.content.scrollTo(0,500,200);
    console.log("Scroll ACTIVE!");
    this.content.scrollToBottom();
  }

  send(){
    
    // 메시지 전송 시간 저장
    this.inputMessageTime = new Date();
    console.log("MessageSend");
    //test
    //this.showMessage = this.inputMessage;

    this.save_data.id=123;
    this.save_data.messageText = this.inputMessage;
    this.save_data.messageTime = this.inputMessageTime;
    
    this.inputMessage = '';
    
    var headers = new Headers({'Content-Type': 'application/json'})
    this.http.post('/mongo_test/chat', this.save_data,{headers: headers})
    .subscribe(
      data=> {
        this.save_data = data.json();
        this.getList();
      }
    )
     setTimeout(() => {
      console.log("timeout");
      this.ScrollTo();
    }, 200);
  }

  getList(){
      this.http.get('/mongo_test/chat')
      .subscribe(
        data=>{
          this.data = data.json();
          //console.log(data.json());
        },
        error =>{

        }
      );
    }

}
