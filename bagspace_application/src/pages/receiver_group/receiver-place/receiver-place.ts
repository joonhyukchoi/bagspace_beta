import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ReceiverDatePage } from '../receiver-date/receiver-date';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-receiver-place',
  templateUrl: 'receiver-place.html',
  styles: []
})
export class ReceiverPlacePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {}

  isCountryClick : boolean = false;
  isCityClick : boolean = false;
  isLandmarkClick : boolean = false;
  flag: Array<boolean> = [];

  countries = [
    '대한민국',
    '중국',
    '일본',
    '이스라엘'
  ];

  cities = [
    '',
    '',
    '',
    ''
  ]

  landmarks = [
    '',
    '',
    '',
    ''
  ]

  korea = [
    '서울',
    '대전',
    '부산',
    '포항'
  ];
  
  //korea landmarks
  seoul = [
    'seoul1',
    'seoul2',
    'seoul3',
    'seoul4'
  ]

  daejeon = [
    'daejeon1',
    'daejeon2',
    'daejeon3',
    'daejeon4'
  ]

  pohang = [
    'pohang1',
    'pohang2',
    'pohang3',
    'pohang4'
  ]

  busan = [
    'busan1',
    'busan2',
    'busan3',
    'busan4'
  ]

  // ...

  china =[
    '상하이',
    '베이징',
    '항저우',
    '난징'
  ];

  japan = [
    '오사카',
    '도쿄',
    '교토',
    '후쿠오카'
  ];

  israel = [
    '예루살렘',
    '텔아이브',
    '하이파',
    '에일라트'
  ];

  //국가 클릭 시
  countryClick(event, country){
    
    if(this.isCityClick == true)
      this.isCityClick = false;
    
    this.isCountryClick = true;
    console.log(this.isCountryClick, this.isCityClick, this.isLandmarkClick);

    if(country=="대한민국"){
      this.cities = this.korea;
    }
    else if(country == "중국"){
      this.cities = this.china;
    }
    else if(country == "일본"){
      this.cities = this.japan;
    }
    else if(country == "이스라엘"){
      this.cities = this.israel;
    }

  }

  test(){
    console.log("test");
  }

  //도시 클릭 시
  cityClick(city: string) {

    if(this.isLandmarkClick == true)
      this.isLandmarkClick = false;
    this.isCityClick = true;

    console.log(this.isCountryClick, this.isCityClick, this.isLandmarkClick);

    if(city=="서울"){
      this.landmarks = this.seoul;
    }
    else if(city == "대전"){
      this.landmarks = this.daejeon;
    }
    else if(city == "부산"){
      this.landmarks = this.busan;
    }
    else if(city == "포항"){
      this.landmarks = this.pohang;
    }
  }

    landmarkClick(landmark:string){

      this.isLandmarkClick = true;
      console.log(this.isCountryClick, this.isCityClick, this.isLandmarkClick);
    }

  //다음 버튼
  moveDate(){

    if( (this.isCityClick==true) && (this.isLandmarkClick == true) )
      this.navCtrl.push(ReceiverDatePage);
    else if(this.isCityClick == true){
      this.landmarkAlert();
    }
    else{
      this.cityAlert();
    }
  }

  cityAlert() {
    let alert = this.alertCtrl.create({
      title: '',
      subTitle: '도시를 선택하세요',
      buttons: ['OK']
    });
    alert.present();
  }

  landmarkAlert() {
    let alert = this.alertCtrl.create({
      title: '',
      subTitle: '랜드마크를 선택하세요',
      buttons: ['OK']
    });
    alert.present();
  }

}
