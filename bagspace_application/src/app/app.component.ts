import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, AlertController } from 'ionic-angular';
import { Http, Headers } from '@angular/http';
import { StatusBar, Splashscreen } from 'ionic-native';
import { NativeStorage, Device } from 'ionic-native';
import {
  Push,
  PushToken
} from '@ionic/cloud-angular';

import { IconPage } from '../pages/tabs_group/tabs/tabs';
import { ReceiverDatePage } from '../pages/receiver_group/receiver-date/receiver-date';
import { LoginPage } from '../pages/login/login';

declare var navigator;
@Component({
  templateUrl: 'app.html'
})

export class MyApp {

  @ViewChild(Nav) nav : Nav;
  
  /* 테스트
   rootPage =;
   constructor(platform: Platform, public http: Http) {}
  */
  
  //test

  showedAlert: boolean;
  confirmAlert; //??

  rootPage: any;

  //data:any={device_id:''};
  data2: any = { device_id: '' };
  
  bagspace_url;
  constructor(public platform: Platform, public push: Push, public http: Http, public alertCtrl: AlertController) {
    this.bagspace_url = "http://thebagspace.com/mongo_test";
    //this.bagspace_url = "/mongo_test"
    platform.ready().then(() => {
      // Here we will check if the user is already logged in
      // because we don't want to ask users to log in each time they open the app
      let env = this;
      NativeStorage.getItem('user')
        .then(function (data) {
          // user is previously logged and we have his data
          // we will let him access the app
          
          env.nav.push(IconPage);
          navigator.splashscreen.show();
          setTimeout(function () {
            navigator.splashscreen.hide();
          }, 500);
        }, function (error) {
          // we don't have the user data so we will ask him to log in
          env.nav.push(LoginPage);
          navigator.splashscreen.show();
          setTimeout(function () {
            navigator.splashscreen.hide();
          }, 500);
        });

      StatusBar.styleDefault();

      this.showedAlert = false;

        // Confirm exit
        this.platform.registerBackButtonAction(() => {
            if (this.nav.length() == 1) {
                if (!this.showedAlert) {
                    this.confirmExitApp();
                } else {
                    this.showedAlert = false;
                    //this.confirmAlert.dismiss();
                }
            }

            this.nav.pop();
        });


    });

    this.push.register().then((t: PushToken) => {
      return this.push.saveToken(t);
    }).then((t: PushToken) => {
      console.log('Token saved:', t.token);
      //this.data.device_id=t.token;
      //var headers = new Headers({'Content-Type': 'application/json'});
      //this.http.post('http://thebagspace.com/mongo_test/device_id', this.data,{headers: headers});

      this.data2.device_id = t.token;
      var headers = new Headers({ 'Content-Type': 'application/json' });
      this.http.post(this.bagspace_url + '/device_id', this.data2, { headers: headers }).subscribe(
        data => {
          console.log(data.json());

        }
      );

    });

    this.push.rx.notification()
      .subscribe((msg) => {
        this.nav.push(ReceiverDatePage);
        alert(msg.title + ': ' + msg.text);

      });
  }

  //맨 처음화면에서 앱 종료시 확인 Alert창 띄우기
  confirmExitApp() {
    this.showedAlert = true;
    this.confirmAlert = this.alertCtrl.create({
        title: "종료 확인",
        message: "앱을 종료하시겠습니까?",
        buttons: [
            {
                text: 'Cancel',
                handler: () => {
                    this.showedAlert = false;
                    return;
                }
            },
            {
                text: 'Ok',
                handler: () => {
                    this.platform.exitApp();
                }
            }
        ]
    });
    this.confirmAlert.present();
}


}