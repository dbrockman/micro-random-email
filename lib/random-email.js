const { URL } = require('url');

/**
 * @param {string} url
 */
const getHostname = url => {
  try {
    let { hostname } = new URL(url);
    const www = 'www.';
    if (hostname.startsWith(www)) {
      hostname = hostname.slice(www.length);
    }
    return hostname;
  } catch (e) {
    return '';
  }
};

/**
 * @param {string} base_email
 * @param {string} service_url
 * @param {string} random_string
 */
module.exports = (base_email, service_url, random_string) => {
  const email_parts = base_email.split('@');
  const hostname = getHostname(service_url);
  if (email_parts.length !== 2 || !email_parts[0] || !email_parts[1] || !hostname) {
    return '';
  }
  return `${email_parts[0]}+${random_string}-${hostname}@${email_parts[1]}`;
};
