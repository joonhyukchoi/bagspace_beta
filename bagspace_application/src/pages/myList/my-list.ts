import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { WaiterDetailPage } from './waiter-detail/waiter-detail';
import { ReceiverDetailPage } from '../receiver_group/receiver-detail/receiver-detail';

@Component({
  selector: 'page-my-list',
  templateUrl: 'my-list.html'
})
export class MyListPage {

  list_Type : string = "waiting_List";
  bagspace_url;
  data;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    //this.bagspace_url ="http://thebagspace.com/mongo_test";
    this.bagspace_url ="/mongo_test";
  }


  goWaiter(){
    this.navCtrl.push(WaiterDetailPage);
  }

  goDetailPage(id:any){
    this.navCtrl.push(ReceiverDetailPage,{id:id});
    console.log(id);
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

