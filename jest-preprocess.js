const babelOptions = {
  presets: ['babel-preset-gatsby']
};
// eslint-disable-next-line
module.exports = require('babel-jest').createTransformer(babelOptions);