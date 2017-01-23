import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the GoodsRegistration2 page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-goods-registration2',
  templateUrl: 'goods-registration2.html'
})
export class GoodsRegistration2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad GoodsRegistration2Page');
  }
goback(){
 this.navCtrl.popTo( this.navCtrl.getByIndex(1));
  
}
}
