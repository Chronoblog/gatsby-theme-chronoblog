import SEO, { genTitle, genUrl } from './seo';

describe('SEO', () => {
  test('SEO({})', () => {
    expect(SEO({})).toBeDefined();
  });
});

describe('genTitle()', () => {
  test('genTitle only meta title', () => {
    const test = genTitle({ title: 'Meta Title' });
    expect(test).toEqual('Meta Title');
  });
  test('genTitle meta title and props title', () => {
    const test = genTitle({ title: 'Meta Title' }, 'Props Title');
    expect(test).toEqual('Props Title | Meta Title');
  });
  test('genTitle only props title', () => {
    const test = genTitle({ title: undefined }, 'Props Title');
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
  describe('with pathPrefix', () => {
    test('genUrl', () => {
      const test = genUrl({
        siteUrl: 'someUrl',
        pathPrefix: 'somePath-Prefix'
      });
      expect(test).toEqual('http://someurl/somepath-prefix');
    });
    test('genUrl - http://', () => {
      const test = genUrl({
        siteUrl: 'http://someUrl',
        pathPrefix: '/somePath-Prefix'
      });
      expect(test).toEqual('http://someurl/somepath-prefix');
    });
    test('genUrl - https://', () => {
      const test = genUrl({
        siteUrl: 'https://someUrl',
        pathPrefix: '/some/Path-Prefix'
      });
      expect(test).toEqual('https://someurl/some/path-prefix');
    });
    test('genUrl - https://', () => {
      const test = genUrl({
        siteUrl: 'https://someUrl',
        pathPrefix: 'some/Path-Prefix/'
      });
      expect(test).toEqual('https://someurl/some/path-prefix');
    });
  });
  describe('with pathPrefix and props.pathName', () => {
    test('genUrl', () => {
      const test = genUrl(
        { siteUrl: 'someUrl', pathPrefix: 'somePath-Prefix' },
        'some-Path-Name'
      );
      expect(test).toEqual('http://someurl/somepath-prefix/some-path-name');
    });
    test('genUrl - http://', () => {
      const test = genUrl(
        {
          siteUrl: 'http://someUrl',
          pathPrefix: '/somePath-Prefix'
        },
        '/some-Path-Name'
      );
      expect(test).toEqual('http://someurl/somepath-prefix/some-path-name');
    });
    test('genUrl - https://', () => {
      const test = genUrl(
        {
          siteUrl: 'https://someUrl',
          pathPrefix: '/some/Path-Prefix'
        },
        '/some-Path-Name/'
      );
      expect(test).toEqual('https://someurl/some/path-prefix/some-path-name');
    });
    test('genUrl - https://', () => {
      const test = genUrl(
        {
          siteUrl: 'https://someUrl',
          pathPrefix: 'some/Path-Prefix/'
        },
        '/some/Path-Name'
      );
      expect(test).toEqual('https://someurl/some/path-prefix/some/path-name');
    });
    test('genUrl - spaces', () => {
      const test = genUrl(
        {
          siteUrl: 'https://someUrl',
          pathPrefix: 'some/Path-Prefix/'
        },
        'some Path Name'
      );
      expect(test).toEqual('https://someurl/some/path-prefix/some-path-name');
    });
  });
});
