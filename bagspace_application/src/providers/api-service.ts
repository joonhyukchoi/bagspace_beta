import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {
  data1: any;
  constructor(public http: Http) {
    console.log('Hello ApiService Provider');
  }

  loadAccess() {
    if (this.data1) {
      return Promise.resolve(this.data1);
    }
    // Dont have the data yet
    return new Promise(resolve => {
      this.http.get('/access')
        .subscribe(
          data => {
          this.data1 = data.json();
          resolve(this.data1);
        });
    });

  }  
}