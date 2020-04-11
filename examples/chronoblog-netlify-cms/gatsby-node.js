const path = require('path');
const fs = require('fs');
const { fmImagesToRelative } = require('gatsby-remark-relative-images');

exports.onPreBootstrap = ({ store }) => {
  const { program } = store.getState();

  const dirs = [path.join(program.directory, `static/media`)];

  dirs.forEach((dir) => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  });
};

exports.onCreateNode = ({ node }) => {
  fmImagesToRelative(node);
};
