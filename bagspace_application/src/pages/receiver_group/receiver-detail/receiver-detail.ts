import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-receiver-detail',
  templateUrl: 'receiver-detail.html'
})
export class ReceiverDetailPage {

  data:any[] =
  [ 
    {item_Name: '', item_Link: '', item_Price: '', item_Benefit: ''}
  ]
  //통합 : 물품 목록, 날짜, 장소, 총 가격
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.test();
  }

  //test
  test(){
    this.data[0].item_Name = '노트북';
    this.data[0].item_Link = 'www.notebook.com';
    this.data[0].item_Price = '2000000원';
    this.data[0].item_Benefit = '20000원';

    console.log(this.data[0].item_Name);
    console.log(this.data[0].item_Link);
  } 

}
