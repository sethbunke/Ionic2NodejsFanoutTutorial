'use strict'

let fanout = require('fanoutpub');
let configuration = require('./configuration');

const realmId = configuration.fanout.realmId;
const realKey = configuration.fanout.realmKey;

let publisher = new fanout.Fanout(realmId, realmKey);
publisher.publish('test', 'Test publish!');