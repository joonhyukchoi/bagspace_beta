import { Component } from '@angular/core';
import { NavController, NavParams, Platform, ViewController } from 'ionic-angular';
import { Facebook, NativeStorage, Device} from 'ionic-native';
import { ProfilePage } from '../profile_group/profile/profile';

import { Http, Headers} from '@angular/http';
import { IntroPage } from '../intro/intro';
import { ApiService } from '../../providers/api-service';
import { IconPage } from '../tabs_group/tabs/tabs';

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
    browser;
    state:boolean=true;
    access: any={access:''};
    public email:any;
    public pic: any;
    public name: any="you";

    constructor(public navCtrl: NavController, public navParams: NavParams, public apiService: ApiService, public platform: Platform, public http:Http, public viewCtrl: ViewController ) {
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
            uuid: Device.uuid,
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
      this.browser=window.open("http://thebagspace.com/login",  "_blank", "location=yes");
      this.browser.addEventListener('exit',  
        () => {  
          this.http.get('http://thebagspace.com/login/access_token')
      .subscribe(
        data=>{
          this.data1 = data.json();
        
        this.email=this.data1.response.email;
        this.name=this.data1.response.name;
        this.pic=this.data1.response.profile_image;
        
        NativeStorage.setItem('user',
            {
            uuid: Device.uuid,
            name: this.name,
            id: this.email,
            picture: this.pic
          }).then(()=>this.navCtrl.push(IntroPage),
          error => console.error('Error storing item', error)
  );
        },
        error =>{}
      );
    }) 
  }
  open(){
      this.navCtrl.push(IconPage);
  }

}  