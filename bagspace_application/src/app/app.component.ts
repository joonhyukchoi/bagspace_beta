import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { Http, Headers } from '@angular/http';
import { NativeStorage, Device } from 'ionic-native';
import {
  Push,
  PushToken
} from '@ionic/cloud-angular';

import { IconPage } from '../pages/tabs_group/tabs/tabs';
import { ChatRoomPage } from '../pages/receiver_group/chat-room/chat-room';
import { ReceiverDatePage } from '../pages/receiver_group/receiver-date/receiver-date';
import { LoginPage } from '../pages/login/login';

declare var navigator;
@Component({
  templateUrl: 'app.html'
})

export class MyApp {

  @ViewChild(Nav) nav : Nav;
  rootPage:any;

  //data:any={device_id:''};
  data2:any={device_id:''};
  bagsapce_url;
  constructor(platform: Platform,public push:Push,public http:Http) {
  this.bagsapce_url ="http://thebagspace.com/mongo_test";
  //this.bagsapce_url = "/mongo_test"
 	platform.ready().then(() => {
      // Here we will check if the user is already logged in
      // because we don't want to ask users to log in each time they open the app
      let env = this;
      NativeStorage.getItem('user')
      .then( function (data) {
        // user is previously logged and we have his data
        // we will let him access the app
         NativeStorage.setItem('id',
          {
            uuid: Device.uuid,
            id: "12"
            
          }).then(
          ()=>this.navCtrl.push(IconPage))
      
        navigator.splashscreen.show();
                setTimeout(function () {
                    navigator.splashscreen.hide();
                }, 500);
      }, function (error) {
        //we don't have the user data so we will ask him to log in
         env.nav.push(LoginPage);
        navigator.splashscreen.show();
                setTimeout(function () {
                    navigator.splashscreen.hide();
                }, 500);
      });

      StatusBar.styleDefault();

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
      this.http.post(this.bagsapce_url+'/device_id', this.data2,{headers: headers}).subscribe(
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