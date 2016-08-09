import {Component, OnInit} from '@angular/core';
import {NavController,Alert} from 'ionic-angular';
import {FanoutProvider} from '../../providers/fanout-provider/fanout-provider';
import {AlertProvider} from '../../providers/alert-provider/alert-provider';

@Component({
  templateUrl: 'build/pages/home/home.html',   
  providers: [FanoutProvider]
})
export class HomePage implements OnInit {
  constructor(public navCtrl: NavController, 
  private fanoutProvider: FanoutProvider,
  private alertPovider: AlertProvider) {}

  ngOnInit() {
    this.fanoutProvider.subscribe((data) => {
      console.log('received data in home page');
      console.log(data);
      this.alertPovider.presentDismissAlert('Fanout', data, this.navCtrl);       
    }, 'test');
  }    
}
