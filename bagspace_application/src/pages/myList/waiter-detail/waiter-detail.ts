import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-waiter-detail',
  templateUrl: 'waiter-detail.html'
})
export class WaiterDetailPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  info_Type : string = 'profile';

}
