import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { PeopleSearch } from '../../providers/people-search';
import { ApiService } from '../../providers/api-service';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [ApiService]
})
export class HomePage {
  data;
  public people: any;
  constructor(public navCtrl: NavController, public apiService: ApiService, public http: Http) {
    //this.loadPeople();
  }

    ionViewDidLoad() {
    this.getList();
    console.log('ionViewDidLoad GoodsRegistrationPage');
  }
  ionViewWillEnter() {
 this.getList();
}


  getList(){
  this.http.get('/login/profile')
  .subscribe(
    data=>{
      this.people = data.json();
      this.people = Array.of(this.people); 
      alert(data.json());
    },
    error =>{

    }
  );
}
}
/*
  loadPeople() {
    this.apiService.load()
      .then(data1 => { 
        this.people = data1;
         this.people = Array.of(this.people); 
        alert(data1)
      });
  } */
