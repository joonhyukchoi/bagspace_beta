import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CategoryPage } from '../category/category';


/*
  Generated class for the GoodsRegistration page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-goods-registration',
  templateUrl: 'goods-registration.html'
})
export class GoodsRegistrationPage {
//public goods_count: number = 1;
goods = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad GoodsRegistrationPage');
  }
goCategoryPage(){
 
  this.navCtrl.push(CategoryPage);
  this.goods[this.goods.length] = "asd";
}
add_good(good:string){
  
}
}
