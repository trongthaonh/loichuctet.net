'use strict';

import angular from 'angular';
const bulk = require('bulk-require');

const servicesModule = angular.module('app.services', []);

const services = bulk(__dirname, ['./**/!(*index|*.spec).js']);

Object.keys(services).forEach((key) => {
  let items = services[key];
  angular.forEach(items, function(_item){
    servicesModule.service(_item.name, _item.fn);
  });
});

export default servicesModule;
