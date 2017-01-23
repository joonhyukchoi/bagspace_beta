import { Component } from '@angular/core';
import { NavController, NavParams, ViewController} from 'ionic-angular';

@Component({
  selector: 'page-rule',
  templateUrl: 'rule.html'
})
export class RulePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {}
  dismiss() {
    this.viewCtrl.dismiss();
  }
}
