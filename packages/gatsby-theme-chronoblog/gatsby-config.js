module.exports = (options) => {
  //
  return {
    plugins: [
      {
        resolve: `gatsby-theme-chronoblog-core`,
        options: { options }
      }
    ]
  };
};
