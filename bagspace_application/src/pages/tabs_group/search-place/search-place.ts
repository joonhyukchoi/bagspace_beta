import { Component, EventEmitter, Output} from '@angular/core';
import { NavController, NavParams, ViewController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-search-place',
  templateUrl: 'search-place.html'
})
export class SearchPlacePage {
 select_country:string=null;
 select_city:string=null;
 constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public viewCtrl:ViewController) {} 
 

  blank = [
    { name: ' ' },
    { name: ' ' },
    { name: ' ' },
    { name: ' ' }
  ];

  countries = [
    { name: '대한민국' },
    { name: '중국' },
    { name: '일본' },
    { name: '이스라엘' }
  ];

  cities = [];

  korea = [
    { name: '서울' },
    { name: '대전' },
    { name: '부산' },
    { name: '포항' }
  ];
  
  china = [
    { name: '상하이' },
    { name: '베이징' },
    { name: '항저우' },
    { name: '난징' }
  ];
  
  japan = [
    { name: '오사카' },
    { name: '도쿄' },
    { name: '교토' },
    { name: '후쿠오카' }
  ];
  
  israel = [
    { name: '예루살렘' },
    { name: '텔아이브' },
    { name: '하이파' },
    { name: '에일라트' }
  ];

  country2(country){
    /*역순으로 집어넣어야함 case와 city가 맞지 않음*/
     switch(country){
      case "대한민국":
        this.cities = this.china;
        break;
      case "중국":
        this.cities = this.japan;
        break;
      case "일본":
        this.cities = this.israel;
        break;
      case "이스라엘":
        this.cities = this.korea;
        break;
    }
  }

  select(country, city){
   
    this.select_country=country;
    this.select_city=city;
    console.log(this.select_city);
    console.log(this.select_country);
     let data = { 'city': this.select_city,
                  'country': this.select_country };
    this.viewCtrl.dismiss(data);
  }
  
}
