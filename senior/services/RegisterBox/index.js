const MESSAGES = require('./messages');

const createRegisterBoxMaker = require('./RegisterBox');

const createRegisterBox = createRegisterBoxMaker({ MESSAGES });

module.exports = createRegisterBox;
