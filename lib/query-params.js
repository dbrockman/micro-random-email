const { parse } = require('url');
const esc = require('lodash.escape');
const { strictEqual } = require('assert');

/**
 * @param {string} url
 */
module.exports = url => {
  let base_email = '';
  let service_url = '';
  try {
    const { query } = parse(url, true);
    base_email = query.base_email || '';
    service_url = query.service_url || '';
    strictEqual(base_email, esc(base_email));
    strictEqual(service_url, esc(service_url));
  } catch (e) {
    base_email = '';
    service_url = '';
  }
  return { base_email, service_url };
};
