/**
 * @param {string} label
 * @param {string} name
 * @param {string} value
 */
const renderInput = (label, name, value) => `
<div class="form-group">
  <label for="${name}">${label}</label>
  <input type="text" class="form-control" id="${name}" name="${name}" value="${value}" placeholder="${label}">
</div>`;

/**
 * @param {string} base_email
 * @param {string} service_url
 * @param {string} random_email
 */
module.exports = (base_email, service_url, random_email) => `<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
  </head>
  <body>
    <div class="container pt-3 pb-3">
      <form method="get" action="/" class="mb-4">
        ${renderInput('Base email', 'base_email', base_email)}
        ${renderInput('Service URL', 'service_url', service_url)}
        <input class="btn btn-primary btn-block" type="submit" value="Go">
      </form>
      <p class="text-center"><mark>${random_email}</mark></p>
    </div>
  </body>
</html>`;
