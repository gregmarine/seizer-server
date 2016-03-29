'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('scorecard service', () => {
  it('registered the scorecards service', () => {
    assert.ok(app.service('scorecards'));
  });
});
