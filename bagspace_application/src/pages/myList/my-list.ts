import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { WaiterDetailPage } from './waiter-detail/waiter-detail';

@Component({
  selector: 'page-my-list',
  templateUrl: 'my-list.html'
})
export class MyListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {}

  list_Type : string = "waiting_List";

  goWaiter(){
    this.navCtrl.push(WaiterDetailPage);
  }

  apply(){
    let confirm = this.alertCtrl.create({
      title: '정말 신청하시겠습니까?',
      message: '',
      buttons: [
        {
          text: '아니오',
          handler: () => {
          }
        },
        {
          text: '예',
          handler: () => {
          }
        }
      ]
    });
    confirm.present();
  }

}

