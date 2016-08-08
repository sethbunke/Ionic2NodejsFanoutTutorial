import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {FanoutProvider} from '../../providers/fanout-provider/fanout-provider';

@Component({
  templateUrl: 'build/pages/home/home.html',   
  providers: [FanoutProvider]
})
export class HomePage {
  constructor(public navCtrl: NavController, private fanoutProvider: FanoutProvider) {

  }
}
