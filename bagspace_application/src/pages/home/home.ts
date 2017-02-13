import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { ApiService } from '../../providers/api-service';

import { Device } from 'ionic-native';
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
    this.loadPeople();
  }
  uuid=Device.uuid;
  
  loadPeople() {
    this.apiService.loadAccess()
      .then(data1 => { 
        this.people = data1;
        this.people = Array.of(this.people); 
        console.log(this.people);
      });
  }
}
