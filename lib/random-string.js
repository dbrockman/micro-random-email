const nanoid = require('nanoid/generate');

const alphabet = '0123456789abcdefghijklmnopqrstuvwxyz';

module.exports = () => nanoid(alphabet, 14);
