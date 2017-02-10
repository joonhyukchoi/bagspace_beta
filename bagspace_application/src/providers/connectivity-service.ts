import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { Network } from 'ionic-native';

declare var Connection;

/*
 type를 전부 connection으로 교체
*/
@Injectable()
export class ConnectivityService {
  
  onDevice: boolean;
 
 constructor(public platform: Platform){
    this.onDevice = this.platform.is('cordova');
  }
   isOnline(): boolean {
    if(this.onDevice && Network.type){
      return Network.type !== Connection.NONE;
    } else {
      return navigator.onLine; 
    }
  }
 
  isOffline(): boolean {
    if(this.onDevice && Network.type){
      return Network.type === Connection.NONE;
    } else {
      return !navigator.onLine;   
    }
  }
}
