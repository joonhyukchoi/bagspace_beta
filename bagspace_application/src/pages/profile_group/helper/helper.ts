import { Component} from '@angular/core';
import {Platform, NavParams, ViewController} from 'ionic-angular';


@Component({
  selector: 'page-helper',
  templateUrl: 'helper.html'
})
export class HelperPage {
  constructor(public platform: Platform, public params: NavParams, public viewCtrl: ViewController) {}
  dismiss() {
    this.viewCtrl.dismiss();
  }

  reserve_state:boolean=true;
  payment_state:boolean=true;
  fee_state:boolean=true;
}
