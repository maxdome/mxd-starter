#! /usr/bin/env node
'use strict';

const cpu = require('cpu');
const pm2 = require('pm2');

pm2.connect(err => {
  if (err) {
    console.error(err);
    process.exit(2);
  }

  const packageJson = require(`${process.cwd()}/package.json`);
  const options = {
    exec_mode: 'cluster',
    instances: cpu.num(),
    args: ['--toto=heya coco', '-d', '1'],
    script: process.argv[2] || packageJson.main,
    watch: false,
    name: packageJson.name,
    error_file: `log/app_${packageJson.name}.log`,
    out_file: `log/app_${packageJson.name}.log`,
    merge_logs: true,
    env_production: {
      NODE_ENV: 'production'
    }
  };

  if (packageJson['mxd-starter']) {
    Object.assign(options, packageJson['mxd-starter']);
  }
  try {
    const propertiesJson = require(`${process.cwd()}/config/properties.json`);
    if (propertiesJson['mxd-starter']) {
      Object.assign(options, propertiesJson['mxd-starter']);
    }
  }
  catch (e) {
    if (e.code !== 'MODULE_NOT_FOUND') {
      throw e;
    }
  }

  pm2.start(options, { env: 'production' }, err => {
    pm2.disconnect();
    if (err) {
      console.error(err);
      process.exit(2);
    } else {
      console.log(`mxd-starter started ${options.name} on ${options.instances} instances`);
    }
  });
});
