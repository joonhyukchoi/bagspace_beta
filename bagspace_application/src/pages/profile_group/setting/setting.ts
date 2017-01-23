import { Component } from '@angular/core';
import { NavController, ModalController, NavParams } from 'ionic-angular';
import { RulePage } from '../setting_group/rule/rule';

@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html'
})
export class SettingPage {
  constructor(public navCtrl: NavController, public modalCtrl: ModalController,  public navParams: NavParams) {}
    
  openModal(page) {
    let modal = this.modalCtrl.create(page);
    modal.present();
  }

  rule=RulePage;
}
