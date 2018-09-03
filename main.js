const queryParams = require('./lib/query-params');
const randomEmail = require('./lib/random-email');
const randomString = require('./lib/random-string');
const renderPage = require('./lib/render-page');

/**
 * @param {Request} req
 */
module.exports = req => {
  const { base_email, service_url } = queryParams(req.url);
  const random_string = randomString();
  const random_email = randomEmail(base_email, service_url, random_string);
  return renderPage(base_email, service_url, random_email);
};
