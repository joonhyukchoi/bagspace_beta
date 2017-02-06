import { Component } from '@angular/core';
import {  NavController,  NavParams } from 'ionic-angular';
import { NativeStorage } from 'ionic-native';

import { HelperPage } from '../helper/helper';
import { SettingPage } from '../setting/setting';
import { InvitePage } from '../invite/invite';
import { FeedbackPage } from '../feedback/feedback';
import { MoverPage } from '../mover/mover';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  user: any;
  userReady: boolean = false;

  constructor(public nav: NavController, public navParams: NavParams) {}


  ionViewWillEnter(){
    let env = this;
    NativeStorage.getItem('user')
    .then(function (data){
      env.user = {
        name: data.name,
        gender: data.gender,
        picture: data.picture
      };
        console.log(data);
        env.userReady = true;
    }, function(error){
      console.log(error);
    });
  }


  openPage(page) {
    this.nav.push(page);
  }
  
  settings=SettingPage;
  invite=InvitePage;
  feedback=FeedbackPage;
  helper=HelperPage;
  mover=MoverPage;  
}
