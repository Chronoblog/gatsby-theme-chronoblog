const fs = require('fs');

console.log('Start Starters Generator');

const startersList = fs
  .readdirSync(`./scripts/generate-starters/starters`)
  .map((folder) => {
    return folder;
  });
