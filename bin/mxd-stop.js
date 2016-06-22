#! /usr/bin/env node
'use strict';

const pm2 = require('pm2');

pm2.connect(err => {
  if (err) {
    console.error(err);
    process.exit(2);
  }
  pm2.stop('all', err => {
    if (err) {
      console.error(err);
      process.exit(2);
    }
    console.log('mxd-starter stopped all instances');
    pm2.killDaemon(err => {
      if (err) {
        console.error(err);
        process.exit(2);
      }
      console.log('mxd-starter daemon got killed');
      /*
       * the command doesn't exit automatically, a "pm2.disconnect();" also doesn't work, so exit
       * the process explicitly successfully
       */
      process.exit(0);
    });
  });
});
