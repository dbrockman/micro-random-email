const randomEmail = require('../random-email');

test('without base email or service url', () => {
  expect(randomEmail('', '', 'm5o5wox30rsxve')).toBe('');
});

test('without base email or service url', () => {
  expect(randomEmail('', '', 'pf05rvv3ktd4uk')).toBe('');
});

test('without base email or service url', () => {
  expect(randomEmail('me@example.com', '', '5s9l8ubbqqzfvo')).toBe('');
});

test('without base email or service url', () => {
  expect(randomEmail('', 'https://google.com/foo', 'h9tu0gowyogdx4')).toBe('');
});

test('without base email or service url', () => {
  expect(randomEmail('me@example.com', 'https://www.google.com/foo', '01o8r2htt0wozd')).toBe(
    'me+01o8r2htt0wozd-google.com@example.com',
  );
});
