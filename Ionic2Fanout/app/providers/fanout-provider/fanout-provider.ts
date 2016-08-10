import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { ConfigurationProvider } from '../configuration-provider/configuration-provider';

@Injectable()
export class FanoutProvider {
  data: any;
  client: any;
  clientUrl: string;

  constructor(private http: Http, private configurationProvider: ConfigurationProvider) {
    this.data = null;
    this.clientUrl = configurationProvider.fanoutUrl;
    this.client = new Faye.Client(this.clientUrl);
  }

  subscribe(callback:any, channelName:string) {      
      this.client.subscribe('/' + channelName, function (data) {          
          callback(data);
          console.log('received data: ' + data);
      });
  }  
}

