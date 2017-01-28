import { Component } from '@angular/core';
import { ProfilePage } from '../../profile_group/profile/profile';  
import { GoodsRegistrationPage } from '../../receiver_group/goods-registration/goods-registration';
import { NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../../login/login';

@Component({
  template: `
     <page-upper-tabs></page-upper-tabs>
`})
export class TabsPage {
}

@Component({
  templateUrl: 'tabs.html'
})
 export class IconPage {
    constructor(public navCtrl: NavController, public navParams: NavParams) {}
  rootPage = TabsPage;
  profilePage = ProfilePage;
  loginpage=LoginPage;
  go_register_page(){
  this.navCtrl.push(GoodsRegistrationPage);
  }
}