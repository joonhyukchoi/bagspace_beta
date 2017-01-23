import { Component} from '@angular/core';
import { NavController,NavParams} from 'ionic-angular';

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
  
  cosmetics=["스킨","로션","수분크림"];
  daily_supplies=["과자","물","쌀"];
  clothes=["장갑","신발","코트"];
 public isActive1: boolean = false;
 public isActive2: boolean = false;
 public isActive3: boolean = false;
 myclass: string="on";
     constructor(public navCtrl: NavController,public navParams: NavParams) {
  
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
  
  
  this.navCtrl.push(GoodsRegistration2Page);
}

 } 
