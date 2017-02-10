import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { Http, Headers } from '@angular/http';
import { NativeStorage } from 'ionic-native';
import {
  Push,
  PushToken
} from '@ionic/cloud-angular';

import { IconPage } from '../pages/tabs_group/tabs/tabs';
import { ChatRoomPage } from '../pages/receiver_group/chat-room/chat-room';
import { ReceiverDatePage } from '../pages/receiver_group/receiver-date/receiver-date';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav : Nav;
  rootPage = IconPage;
  //data:any={device_id:''};
  data2:any={device_id:''};
  constructor(platform: Platform, public push: Push, public http:Http) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();

    });
    
    this.push.register().then((t: PushToken) => {
      return this.push.saveToken(t);
    }).then((t: PushToken) => {
      console.log('Token saved:', t.token);
     // this.data.device_id=t.token;
     // var headers = new Headers({'Content-Type': 'application/json'});
       //this.http.post('http://thebagspace.com/mongo_test/device_id', this.data,{headers: headers});
      
     this.data2.device_id=t.token;
     var headers = new Headers({'Content-Type': 'application/json'});
      this.http.post('http://thebagspace.com/mongo_test/device_id', this.data2,{headers: headers}).subscribe(
      data=> {
        console.log(data.json());
       
      }
    );
    });

    this.push.rx.notification()
    .subscribe((msg) => {
      this.nav.push(ReceiverDatePage);
      alert(msg.title + ': ' + msg.text);
    });
    

  }
}