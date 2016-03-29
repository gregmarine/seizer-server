'use strict';
const scorecard = require('./scorecard');
const player = require('./player');
const authentication = require('./authentication');
const user = require('./user');

module.exports = function() {
  const app = this;


  app.configure(authentication);
  app.configure(user);
  app.configure(player);
  app.configure(scorecard);
};
