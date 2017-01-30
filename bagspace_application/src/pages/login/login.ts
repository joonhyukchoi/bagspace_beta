
import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, Platform } from 'ionic-angular';
import { Facebook, NativeStorage, InAppBrowser} from 'ionic-native';
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

    constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform, public modalCtrl: ModalController) {
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


  openModal(page) {
    let modal = this.modalCtrl.create(page);
    modal.present();
  }
  
 naver(){window.open("http://thebagspace.com/login",  "_blank", "location=yes");}

  browser: InAppBrowser;
  url:string ='http://ionicframework.com/docs/v2/native/inappbrowser/';
  openBrowser() {
    let options ='location=no,toolbar=yes,hidden=no';
    this.browser= new InAppBrowser(this.url,'_blank',options);
    this.browser.show();
  }
  

  doKtLogin(){
if (typeof cordova !== 'undefined') {
  KakaoTalk.login(
      function (result) {
        console.log('Successful login!');
        console.log(result);
      },
      function (message) {
        console.log('Error logging in');
        console.log(message);
      }
  ); }
 
  };   

}  


