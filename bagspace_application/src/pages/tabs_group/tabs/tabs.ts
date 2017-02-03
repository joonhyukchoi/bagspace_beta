import { Component } from '@angular/core';  
import { NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../../login/login';
import { ProfilePage } from '../../profile_group/profile/profile';
import { CategoryPage } from '../../receiver_group/category/category';
import { ReceiverPlacePage } from '../../receiver_group/receiver-place/receiver-place';
import { UpperTabsPage } from '../upper-tabs/upper-tabs';




@Component({
  templateUrl: 'tabs.html'
})
 export class IconPage {
    constructor(public navCtrl: NavController, public navParams: NavParams) {}
  rootPage = UpperTabsPage;
  profilePage = ProfilePage;
  loginpage=LoginPage;
  categoryPage = CategoryPage;
  receiver_place_page = ReceiverPlacePage;

  go_register_page(){
  this.navCtrl.push(ReceiverPlacePage);
  }
}