import {Component, OnInit} from '@angular/core';
import {NavController,Alert} from 'ionic-angular';
import {FanoutProvider} from '../../providers/fanout-provider/fanout-provider';

@Component({
  templateUrl: 'build/pages/home/home.html',   
  providers: [FanoutProvider]
})
export class HomePage implements OnInit {
  constructor(public navCtrl: NavController, private fanoutProvider: FanoutProvider) {

  }

  presentAlert(title:string, subtitle:string) {
    let alert = Alert.create({
      title: title,
      subTitle: subtitle,
      buttons: ['Dismiss']
    });
    this.navCtrl.present(alert);
  }

  ngOnInit() {
    this.fanoutProvider.subscribe((data) => {
      console.log('received data in home page');
      console.log(data);
      this.presentAlert('Fanout', data)
      //this.presentAlert('Fanout', data);
    }, 'test');
  }  
}
