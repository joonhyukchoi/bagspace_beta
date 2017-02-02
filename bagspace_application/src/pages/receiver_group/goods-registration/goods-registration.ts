import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CategoryPage } from '../category/category';
import {Http} from '@angular/http'

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
  data;
  selected_Country: string;
  selected_City: string;
  selected_Landmark: string;
  selected_Date : Date = null;
//public goods_count: number = 1;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http:Http) {
    this.selected_Landmark = navParams.get("landmark");
    this.selected_Country = navParams.get("country");
    this.selected_City = navParams.get("city");
    this.selected_Date = navParams.get("date");
  }

  ionViewDidLoad() {
    this.getList();
    console.log('ionViewDidLoad GoodsRegistrationPage');
  }
  ionViewWillEnter() {
 this.getList();
}
goCategoryPage(){
 
  this.navCtrl.push(CategoryPage,{city:this.selected_City,country:this.selected_Country,landmark:this.selected_Landmark,date:this.selected_Date});
  
}

goback(){
   this.navCtrl.popToRoot();
}

getList(){
  this.http.get('http://thebagspace.com/mongo_test/delivery')
  .subscribe(
    data=>{
      this.data = data.json();
      console.log(data.json());
    },
    error =>{

    }
  );
}
}
