import { Component } from '@angular/core';
import { NavController, NavParams, Platform, Nav } from 'ionic-angular';
import { ReceiverDatePage } from '../receiver-date/receiver-date';
import { AlertController } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

@Component({
  selector: 'page-receiver-place',
  templateUrl: 'receiver-place.html',
  styles: []
})
export class ReceiverPlacePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,
  public platform: Platform, public nav: Nav) {
     this.initializeApp(); 
  }

  showedAlert: boolean;
  confirmAlert;

  country_Index : number = -1;
  city_Index : number = -1;
  landmark_Index : number = -1;

  selected_Country: string;
  selected_City: string;
  selected_Landmark: string;
  
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

  cities = [
    { name: ' ' },
    { name: ' ' },
    { name: ' ' },
    { name: ' ' }
  ];

  landmarks = [
    { name: ' ' },
    { name: ' ' },
    { name: ' ' },
    { name: ' ' }
  ];

  korea = [
    { name: '서울' },
    { name: '대전' },
    { name: '부산' },
    { name: '포항' },
    { name: '대구' },
    { name: '수원' },
    { name: '울산' },
    { name: '여수' }
  ];
  
  //korea landmarks
  seoul = [
    { name: 'seoul1' },
    { name: 'seoul2' },
    { name: 'seoul3' },
    { name: 'seoul4' }
  ];

  daejeon = [
    { name: 'daejeon1' },
    { name: 'daejeon2' },
    { name: 'daejeon3' },
    { name: 'daejeon4' },
  ]

  pohang = [
    { name: 'pohang1' },
    { name: 'pohang2' },
    { name: 'pohang3' },
    { name: 'pohang4' },
  ]

  busan = [
    { name: 'busan1' },
    { name: 'busan2' },
    { name: 'busan3' },
    { name: 'busan4' },
  ]

  // ...

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

  initializeApp() {
    this.platform.ready().then(() => {
        // Okay, so the platform is ready and our plugins are available.
        // Here you can do any higher level native things you might need.
        StatusBar.styleDefault();
        Splashscreen.hide();
        this.showedAlert = false;

        // Confirm exit
        this.platform.registerBackButtonAction(() => {
            if (this.nav.length() == 2) {
                if (!this.showedAlert) {
                    this.confirmExitApp();
                } else {
                    this.showedAlert = false;
                    this.confirmAlert.dismiss();
                }
            }

            this.nav.pop();
        });

    });
}

confirmExitApp() {
    this.showedAlert = true;
    this.confirmAlert = this.alertCtrl.create({
        title: "Salir",
        message: "¿ Esta seguro que desea salir de la aplicación ?",
        buttons: [
            {
                text: 'Cancelar',
                handler: () => {
                    this.showedAlert = false;
                    return;
                }
            },
            {
                text: 'Aceptar',
                handler: () => {
                    this.platform.exitApp();
                }
            }
        ]
    });
    this.confirmAlert.present();
}

  //국가 클릭 시
  countryClick(country, idx, countries){
    
    if(this.city_Index != -1){
      this.cities[this.city_Index]['active'] = false;
      this.city_Index = -1;
    }
    if(this.landmark_Index != -1){
      this.landmarks[this.landmark_Index]['active'] = false;
      this.landmark_Index = -1;    
    }
    //기존에 다른 국가가 선택되어 있을 시, 마우스 클릭 후 CSS 처리 취소
    if(this.country_Index != -1)
      this.countries[this.country_Index]['active'] = false;
    
    country['active'] = !country['active'];
    this.country_Index = idx;
    this.landmarks = this.blank;

    //date 페이지로 넘김
    this.selected_Country = country.name;

    switch(country.name){
      case "대한민국":
        this.cities = this.korea;
        break;
      case "중국":
        this.cities = this.china;
        break;
      case "일본":
        this.cities = this.japan;
        break;
      case "이스라엘":
        this.cities = this.israel;
        break;
    }
  }

  //도시 클릭 시
  cityClick(city, idx, cities) {

    if(this.landmark_Index != -1){
        this.landmarks[this.landmark_Index]['active'] = false;
        this.landmark_Index = -1;
    }
    if(this.city_Index != -1)
      this.cities[this.city_Index]['active'] = false;
    
    city['active'] = !city['active'];
    this.city_Index = idx;

    //date 페이지로 넘김
    this.selected_City = city.name;

    switch(city.name){
      case "서울":
        this.landmarks = this.seoul;
        break;
      case "대전":
        this.landmarks = this.daejeon;
        break;
      case "부산":
        this.landmarks = this.busan;
        break;
      case "포항":
        this.landmarks = this.pohang;
        break;
    }

  }

  landmarkClick(landmark, idx, landmarks){

    if(this.landmark_Index != -1)
      this.landmarks[this.landmark_Index]['active'] = false;
    
    landmark['active']= !landmark['active'];
    this.landmark_Index = idx;

    //date 페이지로 넘김
    this.selected_Landmark = landmark.name;
  }

  //다음 버튼
  moveDate(){

    if( (this.city_Index != -1) && (this.landmark_Index != -1) )
      this.navCtrl.push(ReceiverDatePage, {city:this.selected_City,country:this.selected_Country
        ,landmark:this.selected_Landmark});
    else if(this.city_Index != -1){
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