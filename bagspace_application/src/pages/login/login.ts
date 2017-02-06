
import { Component } from '@angular/core';
import { NavController, NavParams, Platform, ViewController } from 'ionic-angular';
import { Facebook, NativeStorage} from 'ionic-native';
import { ProfilePage } from '../profile_group/profile/profile';
import { Http, Headers, RequestOptions, Request, RequestMethod } from '@angular/http';
import {Observable} from 'rxjs/Observable';

import 'rxjs/Rx';
import 'rxjs/add/operator/map';
declare var cordova: any
declare var KakaoTalk: any
/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
 
export class LoginPage {
    items : any;
    FB_APP_ID: number = 703053959855280;
    
    static get parameters() { return [[Http]]; }

    constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform, public http:Http, public viewCtrl: ViewController ) {
       Facebook.browserInit(this.FB_APP_ID, "v2.8");

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
            name: user.name,
            gender: user.gender,
            picture: user.picture
          })
          .then(function(){
            nav.push(ProfilePage);
          }, function (error) {
            console.log(error);
          })
        })
      }, function(error){
        console.log(error);
      });
    }
    
  doKtLogin(){
    let nav = this.navCtrl;
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
  
  naver(){
    
   var status: boolean=false;
   var count: number=0;
   
   while(count<1){
    if(status==false){
    window.open("http://thebagspace.com/login",  "_blank", "location=yes");
    status=true;
    }
    else{
       var requestOptions = new RequestOptions({
         method: RequestMethod.Post,
         url: 'https://thebagspace.com/login/profile'
       });

       var req = new Request(requestOptions);

       console.log('req.method:', RequestMethod[req.method]);
       console.log('requestOptions.url:', requestOptions.url);
       count++;
    }
   }
   
   }
}  


