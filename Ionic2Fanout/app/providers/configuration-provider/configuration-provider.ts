import { Injectable } from '@angular/core';

@Injectable()
export class ConfigurationProvider {  
  public fanoutUrl: string;
  constructor() {
    this.fanoutUrl = 'http://ab578c16.fanoutcdn.com/bayeux';
  }  
}

