import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CategoryPage } from '../category/category';
import {Http, Headers} from '@angular/http'

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
  save_data:any={state:""};
  selected_Country: string;
  selected_City: string;
  selected_Landmark: string;
  selected_Date : Date = null;
  bagspace_url : string;
//public goods_count: number = 1;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http:Http) {
    this.selected_Landmark = navParams.get("landmark");
    this.selected_Country = navParams.get("country");
    this.selected_City = navParams.get("city");
    this.selected_Date = navParams.get("date");
  }


  ionViewWillEnter() {
 this.getList();
}
goCategoryPage(){
 
  this.navCtrl.push(CategoryPage,{city:this.selected_City,country:this.selected_Country,landmark:this.selected_Landmark,date:this.selected_Date});
  
}

goback(){
   this.save_data.state = 1;
   var headers = new Headers({'Content-Type': 'application/json'})
     this.http.put('/mongo_test/delivery/0', this.save_data,{headers: headers})
    .subscribe(
      data=> {
        this.save_data = data.json();
        alert("등록되었습니다.");
        this.navCtrl.popToRoot();
      }
    )
   
}

getList(){
  this.http.get('/mongo_test/delivery/register')
  .subscribe(
    data=>{
      this.data = data.json();
      console.log(data.json());
    },
    error =>{

    }
  );
}

delete(id:string){

     this.bagspace_url = '/mongo_test/delivery/'+id;
     var headers = new Headers({'Content-Type': 'application/json'})
     this.http.delete(this.bagspace_url, {headers: headers})
    .subscribe(
      data=> {
        this.save_data = data.json();
         this.getList();
      }
    )

}

}
