import { Component } from '@angular/core';  
import { NavController, NavParams, Platform } from 'ionic-angular';
import { Keyboard } from 'ionic-native';
import { LoginPage } from '../../login/login';
import { ProfilePage } from '../../profile_group/profile/profile';
import { CategoryPage } from '../../receiver_group/category/category';
import { ReceiverPlacePage } from '../../receiver_group/receiver-place/receiver-place';
import { UpperTabsPage } from '../upper-tabs/upper-tabs';
import { MapPage } from '../../receiver_group/map/map';
import { HomePage } from '../../home/home';
import { MyInfoPage } from '../../my-info/my-info';

@Component({
  templateUrl: 'tabs.html'
})
 
 export class IconPage {
    constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform) {

    //채팅방에서 키보드가 보일 때, 탭 바(Tabbar) display : none 처리
    platform.ready().then(() => {
          Keyboard.onKeyboardShow().subscribe(() => {
              document.body.classList.add('keyboard-is-open');
        });

          Keyboard.onKeyboardHide().subscribe(() => {
              document.body.classList.remove('keyboard-is-open');
          });
    });
  }

  rootPage = UpperTabsPage;
  profilePage = ProfilePage;
  myPage = MyInfoPage;
  homepage = HomePage;
  categoryPage = CategoryPage;
  receiver_place_page = ReceiverPlacePage;
  mapPage = MapPage;

  go_register_page(){
  this.navCtrl.push(ReceiverPlacePage);
  }
}