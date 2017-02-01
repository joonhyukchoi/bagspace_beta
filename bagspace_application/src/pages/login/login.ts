
import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { Facebook, NativeStorage} from 'ionic-native';
import { ProfilePage } from '../profile_group/profile/profile';
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


    FB_APP_ID: number = 703053959855280;

    constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform) {
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
            
            NativeStorage.setItem('user',
            {
            name: result.id,
            gender: result.nickname,
            picture: result.profile_image
          }),
          function(){
            nav.push(ProfilePage);
          }, function (error) {
            console.log(error);
          }
          },
          function (message) {
            console.log('Error logging in');
            console.log(message);
          })
      }
    };   
  
  naver(){window.open("http://thebagspace.com/login",  "_blank", "location=yes");}  
}  


