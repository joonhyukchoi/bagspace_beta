import { Component } from '@angular/core';
import { ProfilePage } from '../../profile_group/profile/profile';
import { CategoryPage } from '../../receiver_group/category/category';

import { NavController, NavParams } from 'ionic-angular';
import { ReceiverPlacePage } from '../../receiver_group/receiver-place/receiver-place';

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
  categoryPage = CategoryPage;
  
  receiver_place_page = ReceiverPlacePage;
  go_register_page(){
  this.navCtrl.push(ReceiverPlacePage);
  }
}