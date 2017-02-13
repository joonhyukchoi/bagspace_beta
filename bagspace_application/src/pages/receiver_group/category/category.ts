import { Component} from '@angular/core';
import { NavController,NavParams} from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { GoodsRegistration2Page } from '../goods-registration2/goods-registration2';

/*
  Generated class for the Category page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-category',
  templateUrl: 'category.html'
})

export class CategoryPage {
  selected_Country: string;
  selected_City: string;
  selected_Landmark: string;
  selected_Date : string;
  selected_Category:string;
  cosmetics=["스킨","로션","수분크림"];
  daily_supplies=["과자","물","쌀"];
  clothes=["장갑","신발","코트"];
 public isActive1: boolean = false;
 public isActive2: boolean = false;
 public isActive3: boolean = false;
 myclass: string="on";
     constructor(public navCtrl: NavController,public navParams: NavParams, public alertCtrl: AlertController) {
    this.selected_Landmark = navParams.get("landmark");
    this.selected_Country = navParams.get("country");
    this.selected_City = navParams.get("city");
    this.selected_Date = navParams.get("date");
  
  }
 onlyone(isActive:number){
  
   if(isActive==1){
   this.isActive1=!this.isActive1;
   this.isActive2 = false;
   this.isActive3 = false;
   }
    if(isActive==2){
      this.isActive2=!this.isActive2;
   this.isActive1 = false;
   this.isActive3 = false;
   }
    if(isActive==3){
      this.isActive3=!this.isActive3;
   this.isActive2 = false;
   this.isActive1 = false;
   }
 }

goback(good:string){
  this.selected_Category = good;
  this.navCtrl.push(GoodsRegistration2Page,{city:this.selected_City,country:this.selected_Country,landmark:this.selected_Landmark,date:this.selected_Date,category:this.selected_Category});
}


 } 
