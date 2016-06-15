#! /usr/bin/env node
'use strict';

const pm2 = require('pm2');

pm2.connect(err => {
  if (err) {
    console.error(err);
    process.exit(2);
  }
  pm2.list();
});
