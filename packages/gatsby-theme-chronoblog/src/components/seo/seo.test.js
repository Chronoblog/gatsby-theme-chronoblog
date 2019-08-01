import seo, { genTitle, genUrl } from './seo';

test('seo', () => {
  const test = seo({});
  expect(test).toBeDefined();
});

describe('genTitle', () => {
  test('genTitle only meta title', () => {
    const test = genTitle({ title: 'Meta Title' });
    expect(test).toEqual('Meta Title');
  });
  test('genTitle meta title and props title', () => {
    const test = genTitle({ title: 'Meta Title' }, { title: 'Props Title' });
    expect(test).toEqual('Props Title | Meta Title');
  });
  test('genTitle only props title', () => {
    const test = genTitle({ title: undefined }, { title: 'Props Title' });
    expect(test).toEqual('Props Title');
  });
});

describe('genUrl', () => {
  test('genUrl', () => {
    const test = genUrl({ url: 'someUrl' });
    expect(test).toEqual('someUrl/');
  });
});
