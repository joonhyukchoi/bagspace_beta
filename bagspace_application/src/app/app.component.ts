import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { IconPage } from '../pages/tabs_group/tabs/tabs';
import { ChatRoomPage } from '../pages/mover-apply/chat-room/chat-room';
import { ReceiverDetailPage } from '../pages/receiver_group/receiver-detail/receiver-detail';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  
  rootPage = IconPage;
  //rootPage = ReceiverDetailPage;
  
  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
