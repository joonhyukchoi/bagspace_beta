import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { IconPage } from '../pages/tabs_group/tabs/tabs';
import { ReceiverDatePage } from '../pages/receiver_group/receiver-date/receiver-date';
import { ReceiverPlacePage } from '../pages/receiver_group/receiver-place/receiver-place';
import { MoverPage } from '../pages/profile_group/mover/mover';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  //rootPage = IconPage;
  //rootPage = ReceiverDatePage;
  //rootPage = MoverPage;
  rootPage = ReceiverPlacePage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
