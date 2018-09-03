const micro = require('micro');
const listen = require('test-listen');
const got = require('got');
const main = require('../main');

let service;
let url;

beforeAll(async () => {
  service = micro(main);
  url = await listen(service);
});

afterAll(done => {
  service.close(done);
});

test('req', async () => {
  const res = await got(url);
  expect(res.statusCode).toBe(200);
});

test('req with query', async () => {
  const res = await got(url, {
    query: {
      base_email: 'me@example.com',
      service_url: 'https://google.com/foo',
    },
  });
  expect(res.statusCode).toBe(200);
  expect(res.body).toMatch(/me\+[0-9a-z]{14}-google\.com@example\.com/);
});
