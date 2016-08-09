'use strict'

let fanout = require('fanoutpub');
let configuration = require('./configuration');

const realmId = configuration.fanout.realmId;
const realmKey = configuration.fanout.realmKey;

let callback = (success, message, context) => {
    if (success) {
        console.log('Publish successful!');
    }
    else {
        console.log('Publish failed!');
        console.log('Message: ' + message);
        console.log('Context: ');
        console.dir(context); 
    }
};

let publisher = new fanout.Fanout(realmId, realmKey);
publisher.publish('test', 'Test publish!', callback);