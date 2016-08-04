'use strict'

let fanout = require('fanoutpub');

const realmId = 'your-id-here';
const realKey = 'your-key-here';

let publisher = new fanout.Fanout(realmId, realmKey);
publisher.publish('test', 'Test publish!');