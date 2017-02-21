import { Component, ViewChild} from '@angular/core';
import { NavController, NavParams, Content, Platform } from 'ionic-angular';
import { Http, Headers } from '@angular/http';
import { Keyboard,NativeStorage } from 'ionic-native';

@Component({
  selector: 'page-chat-room',
  templateUrl: 'chat-room.html',
})

export class ChatRoomPage{
@ViewChild(Content) content : Content;

  isClick: boolean = false;
  isKeyboardUp: boolean = false;

  //기본 유저 정보
  myId;
  userId:string = '';

  //메시지 
  inputMessage: string = '';
  inputMessageTime: Date = null;

  bagsapce_url;
  showMessage: string ='';
  item;


  save_data:any= { id:'',device_id:'',messageText: '', messageTime: '',goods_id:'',receiver_id:'',receiver_device_id:'',writer:''}
  data;
  device_id;


  constructor(public navCtrl: NavController, public navParams: NavParams, public http:Http, 
  platform: Platform){  
      this.bagsapce_url ="http://thebagspace.com/mongo_test";
       //this.bagsapce_url ="/mongo_test";
  this.save_data.goods_id = navParams.get("goods_id");
  this.save_data.receiver_id = navParams.get("receiver_id");
  this.save_data.receiver_device_id = navParams.get("receiver_device_id");
  this.getItem();
  
  
 
  //this.bagsapce_url ="/mongo_test";

//키보드 나타날 때, 메시지 맨 밑으로 내리기 : 키보드가 올라가면 대화가 가려지기 때문에
    platform.ready().then(() => {
        Keyboard.onKeyboardShow().subscribe(() => {
            this.ScrollTo();
        });
    });

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
    this.save_data.id = this.item[0].id;
    this.save_data.device_id = this.item[0].device_id
    this.inputMessageTime = new Date();
    this.save_data.writer =this.myId;
    
    this.save_data.messageText = this.inputMessage;
    this.save_data.messageTime = this.inputMessageTime;
    if(this.myId !=this.item[0].id){
      this.save_data.receiver_id = this.myId;
      this.save_data.receiver_device_id = this.device_id;
    }
    this.inputMessage = '';

    
    var headers = new Headers({'Content-Type': 'application/json'})
    this.http.post(this.bagsapce_url+'/chat', this.save_data,{headers: headers})
    .subscribe(
      data=> {
       
        this.getItem();
      }
    );
     setTimeout(() => {
      console.log("timeout");
      this.ScrollTo();
    }, 200);
  }

getList(){
  
  this.http.get(this.bagsapce_url+'/chat'+'/'+ this.save_data.goods_id+'/'+this.item[0].id+'/'+this.save_data.receiver_id)
  .subscribe(
    data=>{
      this.data = data.json();
      console.log(data.json());
    },
    error =>{

        }
      );
    }

getItem(){

  this.http.get(this.bagsapce_url+'/delivery/detail/'+this.save_data.goods_id)
  .subscribe(
    data=>{
      this.item = data.json();
      console.log(data.json());

      NativeStorage.getItem('id')
      .then(data=> {this. myId = data.id ;this.device_id=data.uuid;
         if(this.save_data.receiver_id==null){
        this.save_data.receiver_id = this.myId;
       }
      if(this.save_data.receiver_id ==this.item[0].id){
         alert(this.myId+"내가 등록한 상품입니다."+this.item[0].id);
         this.navCtrl.pop();

       }
     this.getList();
      });  
     
    },
    error =>{

    }
  );
}

}
