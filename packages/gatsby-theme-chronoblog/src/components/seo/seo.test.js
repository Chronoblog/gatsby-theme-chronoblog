import SEO, { genTitle, genUrl } from './seo';

describe('SEO', () => {
  test('SEO({})', () => {
    expect(SEO({})).toBeDefined();
  });
});

describe('genTitle()', () => {
  test('genTitle only meta title', () => {
    const test = genTitle({ siteTitle: 'Meta Title' });
    expect(test).toEqual('Meta Title');
  });
  test('genTitle meta title and props title', () => {
    const test = genTitle({ siteTitle: 'Meta Title' }, 'Props Title');
    expect(test).toEqual('Props Title | Meta Title');
  });
  test('genTitle only props title', () => {
    const test = genTitle({ siteTitle: undefined }, 'Props Title');
    expect(test).toEqual('Props Title');
  });
});

describe('genUrl()', () => {
  describe('only url', () => {
    test('genUrl', () => {
      const test = genUrl({ siteUrl: 'someUrl' });
      expect(test).toEqual('http://someurl');
    });
    test('genUrl - http://', () => {
      const test = genUrl({ siteUrl: 'http://someUrl' });
      expect(test).toEqual('http://someurl');
    });
    test('genUrl - https://', () => {
      const test = genUrl({ siteUrl: 'https://someUrl' }, '');
      expect(test).toEqual('https://someurl');
    });
  });
});
