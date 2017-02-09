import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
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
  
  constructor(platform: Platform, public push: Push) {
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
    });

    this.push.rx.notification()
    .subscribe((msg) => {
      this.nav.push(ReceiverDatePage);
      alert(msg.title + ': ' + msg.text);
    });
    

  }
}