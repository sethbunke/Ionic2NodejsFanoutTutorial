import { Injectable } from '@angular/core';
import {NavController,Alert} from 'ionic-angular';

@Injectable()
export class AlertProvider {
  
  constructor() {}  
  
  presentDismissAlert(title: string, subtitle: string, navCtrl: NavController) {    
    let alert = Alert.create({
      title: title,
      subTitle: subtitle,
      buttons: ['Dismiss']
    });
    navCtrl.present(alert);  
  }  

}

