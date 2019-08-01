const gatsby = jest.requireActual('gatsby');

// if we need to simulate more data - we can use json
const siteDataMock = { site: { siteMetadata: { title: 'Title Mock' } } };

module.exports = {
  ...gatsby,
  graphql: jest.fn(),
  useStaticQuery: jest.fn().mockReturnValue(siteDataMock)
};
