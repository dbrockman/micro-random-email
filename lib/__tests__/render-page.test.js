const renderPage = require('../render-page');

test('render page with no params', () => {
  expect(renderPage('', '', '')).toMatchInlineSnapshot(`
"<!doctype html>
<html>
  <head>
    <meta charset=\\"utf-8\\">
    <meta name=\\"viewport\\" content=\\"width=device-width, initial-scale=1, shrink-to-fit=no\\">
    <link rel=\\"stylesheet\\" href=\\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css\\" integrity=\\"sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO\\" crossorigin=\\"anonymous\\">
  </head>
  <body>
    <div class=\\"container pt-3 pb-3\\">
      <form method=\\"get\\" action=\\"/\\" class=\\"mb-4\\">
        
<div class=\\"form-group\\">
  <label for=\\"base_email\\">Base email</label>
  <input type=\\"text\\" class=\\"form-control\\" id=\\"base_email\\" name=\\"base_email\\" value=\\"\\" placeholder=\\"Base email\\">
</div>
        
<div class=\\"form-group\\">
  <label for=\\"service_url\\">Service URL</label>
  <input type=\\"text\\" class=\\"form-control\\" id=\\"service_url\\" name=\\"service_url\\" value=\\"\\" placeholder=\\"Service URL\\">
</div>
        <input class=\\"btn btn-primary btn-block\\" type=\\"submit\\" value=\\"Go\\">
      </form>
      <p class=\\"text-center\\"><mark></mark></p>
    </div>
  </body>
</html>"
`);
});

test('render page with base email', () => {
  expect(renderPage('me@example.com', '', '')).toMatchInlineSnapshot(`
"<!doctype html>
<html>
  <head>
    <meta charset=\\"utf-8\\">
    <meta name=\\"viewport\\" content=\\"width=device-width, initial-scale=1, shrink-to-fit=no\\">
    <link rel=\\"stylesheet\\" href=\\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css\\" integrity=\\"sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO\\" crossorigin=\\"anonymous\\">
  </head>
  <body>
    <div class=\\"container pt-3 pb-3\\">
      <form method=\\"get\\" action=\\"/\\" class=\\"mb-4\\">
        
<div class=\\"form-group\\">
  <label for=\\"base_email\\">Base email</label>
  <input type=\\"text\\" class=\\"form-control\\" id=\\"base_email\\" name=\\"base_email\\" value=\\"me@example.com\\" placeholder=\\"Base email\\">
</div>
        
<div class=\\"form-group\\">
  <label for=\\"service_url\\">Service URL</label>
  <input type=\\"text\\" class=\\"form-control\\" id=\\"service_url\\" name=\\"service_url\\" value=\\"\\" placeholder=\\"Service URL\\">
</div>
        <input class=\\"btn btn-primary btn-block\\" type=\\"submit\\" value=\\"Go\\">
      </form>
      <p class=\\"text-center\\"><mark></mark></p>
    </div>
  </body>
</html>"
`);
});

test('render page with service url', () => {
  expect(renderPage('', 'https://example.com/foo', '')).toMatchInlineSnapshot(`
"<!doctype html>
<html>
  <head>
    <meta charset=\\"utf-8\\">
    <meta name=\\"viewport\\" content=\\"width=device-width, initial-scale=1, shrink-to-fit=no\\">
    <link rel=\\"stylesheet\\" href=\\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css\\" integrity=\\"sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO\\" crossorigin=\\"anonymous\\">
  </head>
  <body>
    <div class=\\"container pt-3 pb-3\\">
      <form method=\\"get\\" action=\\"/\\" class=\\"mb-4\\">
        
<div class=\\"form-group\\">
  <label for=\\"base_email\\">Base email</label>
  <input type=\\"text\\" class=\\"form-control\\" id=\\"base_email\\" name=\\"base_email\\" value=\\"\\" placeholder=\\"Base email\\">
</div>
        
<div class=\\"form-group\\">
  <label for=\\"service_url\\">Service URL</label>
  <input type=\\"text\\" class=\\"form-control\\" id=\\"service_url\\" name=\\"service_url\\" value=\\"https://example.com/foo\\" placeholder=\\"Service URL\\">
</div>
        <input class=\\"btn btn-primary btn-block\\" type=\\"submit\\" value=\\"Go\\">
      </form>
      <p class=\\"text-center\\"><mark></mark></p>
    </div>
  </body>
</html>"
`);
});

test('render page with base email and service url', () => {
  expect(renderPage('me@example.com', 'https://example.com/foo', '')).toMatchInlineSnapshot(`
"<!doctype html>
<html>
  <head>
    <meta charset=\\"utf-8\\">
    <meta name=\\"viewport\\" content=\\"width=device-width, initial-scale=1, shrink-to-fit=no\\">
    <link rel=\\"stylesheet\\" href=\\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css\\" integrity=\\"sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO\\" crossorigin=\\"anonymous\\">
  </head>
  <body>
    <div class=\\"container pt-3 pb-3\\">
      <form method=\\"get\\" action=\\"/\\" class=\\"mb-4\\">
        
<div class=\\"form-group\\">
  <label for=\\"base_email\\">Base email</label>
  <input type=\\"text\\" class=\\"form-control\\" id=\\"base_email\\" name=\\"base_email\\" value=\\"me@example.com\\" placeholder=\\"Base email\\">
</div>
        
<div class=\\"form-group\\">
  <label for=\\"service_url\\">Service URL</label>
  <input type=\\"text\\" class=\\"form-control\\" id=\\"service_url\\" name=\\"service_url\\" value=\\"https://example.com/foo\\" placeholder=\\"Service URL\\">
</div>
        <input class=\\"btn btn-primary btn-block\\" type=\\"submit\\" value=\\"Go\\">
      </form>
      <p class=\\"text-center\\"><mark></mark></p>
    </div>
  </body>
</html>"
`);
});

test('render page with base email and service url and random email', () => {
  expect(renderPage('me@example.com', 'https://example.com/foo', 'me+random-example.com@example.com')).toMatchInlineSnapshot(`
"<!doctype html>
<html>
  <head>
    <meta charset=\\"utf-8\\">
    <meta name=\\"viewport\\" content=\\"width=device-width, initial-scale=1, shrink-to-fit=no\\">
    <link rel=\\"stylesheet\\" href=\\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css\\" integrity=\\"sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO\\" crossorigin=\\"anonymous\\">
  </head>
  <body>
    <div class=\\"container pt-3 pb-3\\">
      <form method=\\"get\\" action=\\"/\\" class=\\"mb-4\\">
        
<div class=\\"form-group\\">
  <label for=\\"base_email\\">Base email</label>
  <input type=\\"text\\" class=\\"form-control\\" id=\\"base_email\\" name=\\"base_email\\" value=\\"me@example.com\\" placeholder=\\"Base email\\">
</div>
        
<div class=\\"form-group\\">
  <label for=\\"service_url\\">Service URL</label>
  <input type=\\"text\\" class=\\"form-control\\" id=\\"service_url\\" name=\\"service_url\\" value=\\"https://example.com/foo\\" placeholder=\\"Service URL\\">
</div>
        <input class=\\"btn btn-primary btn-block\\" type=\\"submit\\" value=\\"Go\\">
      </form>
      <p class=\\"text-center\\"><mark>me+random-example.com@example.com</mark></p>
    </div>
  </body>
</html>"
`);
});
