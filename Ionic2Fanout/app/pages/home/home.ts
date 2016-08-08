import {Component, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';
import {FanoutProvider} from '../../providers/fanout-provider/fanout-provider';

@Component({
  templateUrl: 'build/pages/home/home.html',   
  providers: [FanoutProvider]
})
export class HomePage implements OnInit {
  constructor(public navCtrl: NavController, private fanoutProvider: FanoutProvider) {

  }

  ngOnInit() {
    this.fanoutProvider.subscribe((data) => {
      console.log('received data in home page');
      console.log(data);
      //this.presentAlert('Fanout', data);
    }, 'test');
  }  
}
