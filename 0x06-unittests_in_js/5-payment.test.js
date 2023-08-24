const sinon = require('sinon');
var { expect } = require('chai');

const sendPaymentRequestToApi = require('./5-payment');
//const Utils = require('./utils');

describe('Hooks.', function () {
  let spyConsole;
  beforeEach(function () {
    // Runs before each test in this block.
    spyConsole = sinon.spy(console, 'log');
  });

  afterEach(function () {
    // Runs after each test in this block.
    spyConsole.restore();
  });
