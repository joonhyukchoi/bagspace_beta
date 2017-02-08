import { Component } from '@angular/core';
import { NavController, NavParams, Platform, ViewController } from 'ionic-angular';
import { Facebook, NativeStorage, Device} from 'ionic-native';
import { ProfilePage } from '../profile_group/profile/profile';

import { Http, Headers} from '@angular/http';
import { IntroPage } from '../intro/intro';
import { ApiService } from '../../providers/api-service';

declare var cordova: any
declare var KakaoTalk: any

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [ApiService]
})
 
export class LoginPage {
   data1:any;
    FB_APP_ID: number = 703053959855280;
    state=true;
    access: any={access:''};

    constructor(public navCtrl: NavController, public navParams: NavParams, public apiService: ApiService, public platform: Platform, public http:Http, public viewCtrl: ViewController ) {
       Facebook.browserInit(this.FB_APP_ID, "v2.8");   

       if(this.state==false){
         console.log("wow");
       }
    }

    doFbLogin(){
      let permissions = new Array();
      let nav = this.navCtrl;
      //the permissions your facebook app needs from the user
      permissions = ["public_profile"];
      
      Facebook.login(permissions)
      .then(function(response){
        let userId = response.authResponse.userID;
        let params = new Array();

        //Getting name and gender properties
        Facebook.api("/me?fields=name,gender", params)
        .then(function(user) {
          user.picture = "https://graph.facebook.com/" + userId + "/picture?type=large";
          //now we have the users info, let's save it in the NativeStorage
          NativeStorage.setItem('user',
          {
            uuid: Device.uuid,
            name: user.name,
            gender: user.gender,
            picture: user.picture
          })
          .then(function(){
            nav.push(IntroPage);
          }, function (error) {
            console.log(error);
          })
        })
      }, function(error){
        console.log(error);
      });
    }
    
  doKtLogin(){
    if (typeof cordova !== 'undefined') {
      KakaoTalk.login()
          .then(function (result) {
           
          }),
          function (message) {
            console.log('Error logging in');
            console.log(message);
          }
      }
    };   
  
  doNvLogin(){
    window.open("http://thebagspace.com/login",  "_blank", "location=yes");
    console.log(this.state);
    this.state=false;
    console.log(this.state);
    this.loadToken();
    this.navCtrl.push(IntroPage);
  }

    loadToken() {
    let token;
    this.apiService.loadAccess()
      .then(data1 => { 
        this.access.access = data1;
        console.log("wow")
        console.log(this.access.access);
      })  
    }

loadProfile(){
    
     var headers = new Headers({'Content-Type': 'application/json'})
    this.http.post('/login/profile', this.access,{headers: headers})
    .subscribe(
      data=> {
        this.access = data.json();
        alert("등록되었습니다.");
      }
    )  
}

  open(){
    console.log(this.state);
    this.navCtrl.push(IntroPage);
  }
}  


