import ErrorRepository from '../map';

test('test error', () => {
  const err = new ErrorRepository();

  expect(err.translate('404')).toBe('Bad Request');
});

test('test error', () => {
  const err = new ErrorRepository();

  expect(err.translate('400')).toBe('Unknown error');
});
