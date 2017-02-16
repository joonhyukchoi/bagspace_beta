import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Http, Headers } from '@angular/http';
import { Camera,NativeStorage } from 'ionic-native';
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
  image_url;
  public base64Image: string;
  selected_Country: string;
  selected_City: string;
  selected_Landmark: string;
  selected_Date : string;
  selected_Category:string;
  selected_Object_name : string; 
  selected_Url : string; 
  selected_Delivery_charge : string; 
  selected_Price : string; 
  bagsapce_url;
  image:any={image:'',title:''};
  id;
  device_id;
  data:any={selected_Country: '',selected_City:'',selected_Landmark: '',selected_Date : '',selected_Category:'',selected_Object_name : '',selected_Url : '',selected_Delivery_charge : '', selected_Price : '', selected_Picture: '',id:'',device_id:''};
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public http:Http) {
    this.bagsapce_url ="http://thebagspace.com/mongo_test";
    //this.bagsapce_url ="/mongo_test";
    this.selected_Landmark = navParams.get("landmark");
    this.selected_Country = navParams.get("country");
    this.selected_City = navParams.get("city");
    this.selected_Date = navParams.get("date");
    this.selected_Category = navParams.get("category");
     NativeStorage.getItem('id')
    .then(data=> {this.id = data.id ;this.device_id=data.uuid;});  
  }

goback(){
  if(this.base64Image==null){
        this.data.selected_Country = this.selected_Country;
        this.data.selected_City=this.selected_City;
        this.data.selected_Landmark=this.selected_Landmark;
        this.data.selected_Date=this.selected_Date;
        this.data.selected_Category=this.selected_Category;
        this.data.selected_Object_name=this.selected_Object_name;
        this.data.selected_Url=this.selected_Url;
        this.data.selected_Delivery_charge=this.selected_Delivery_charge;
        this.data.selected_Price=this.selected_Price;
        this.data.selected_Picture = "";
        this.data.id = this.id;
        this.data.device_id = this.device_id;
     var headers = new Headers({'Content-Type': 'application/json'})
    this.http.post(this.bagsapce_url+'/delivery', this.data,{headers: headers})
        .subscribe(
          data=> {
            this.data = data.json();
            this.navCtrl.popTo( this.navCtrl.getByIndex(this.navCtrl.length()-3));
          })
  }else{
this.image.image = this.base64Image;
this.image.title = this.id+new Date().toString();
  var headers = new Headers({'Content-Type': 'application/json'})

    this.http.post(this.bagsapce_url+'/delivery/image', this.image,{headers: headers})
    .subscribe(
      data=> {
        this.image_url = data.json();
        
        this.data.selected_Country = this.selected_Country;
        this.data.selected_City=this.selected_City;
        this.data.selected_Landmark=this.selected_Landmark;
        this.data.selected_Date=this.selected_Date;
        this.data.selected_Category=this.selected_Category;
        this.data.selected_Object_name=this.selected_Object_name;
        this.data.selected_Url=this.selected_Url;
        this.data.selected_Delivery_charge=this.selected_Delivery_charge;
        this.data.selected_Price=this.selected_Price;
        this.data.selected_Picture = this.image_url.Location;
         this.data.id = this.id;
        this.data.device_id = this.device_id;
     var headers = new Headers({'Content-Type': 'application/json'})
    this.http.post(this.bagsapce_url+'/delivery', this.data,{headers: headers})
        .subscribe(
          data=> {
            this.data = data.json();
            this.navCtrl.popTo( this.navCtrl.getByIndex(this.navCtrl.length()-3));
          })
     })
  }

 }

 Alert() {
    let alert = this.alertCtrl.create({
      title: '',
      subTitle: this.selected_Object_name+this.selected_Price,
      buttons: ['OK']
    });
    alert.present();
  }

   takePicture(){
    Camera.getPicture({
        destinationType: Camera.DestinationType.DATA_URL,
        targetWidth: 1000,
        targetHeight: 1000,
        sourceType : Camera.PictureSourceType.PHOTOLIBRARY
    }).then((imageData) => {
      // imageData is a base64 encoded string
        this.base64Image = "data:image/jpeg;base64," + imageData;
        console.log(this.base64Image);
    }, (err) => {
        console.log(err);
    });
  }
}



