Utils = require('./utils');

Utils = require('./utils');
const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
    const output = Utils.calculateNumber('SUM', totalAmount, totalShipping);
    console.log(`The total is: ${output}`);
}

module.exports = sendPaymentRequestToApi;
