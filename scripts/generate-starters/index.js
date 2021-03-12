const fs = require('fs-extra');

const getStartersList = async (folder) => {
  return fs
    .readdirSync(`./scripts/generate-starters/${folder}`)
    .map((folderName) => folderName);
};

const copyFolder = async (folderThatCopied = '/', folderWhereCopy = '/') => {
  try {
    await fs.copy(folderThatCopied, folderWhereCopy);
  } catch (err) {
    console.error(err);
  }
};

const generateStarters = async () => {
  console.log('Start Starters Generator');

  const startersList = await getStartersList('starters');
  startersList.map(async (folderName) => {
    fs.copySync(
      `./starters/${folderName}/package.json`,
      `./scripts/generate-starters/starters/${folderName}/package.json`
    );
    //
    fs.rmdirSync(`./starters/${folderName}`, { recursive: true });
    //
    await copyFolder(
      './scripts/generate-starters/base-starter',
      `./starters/${folderName}`
    );
    await copyFolder(
      `./scripts/generate-starters/starters/${folderName}`,
      `./starters/${folderName}`
    );
  });

  const examplesList = await getStartersList('examples');
  examplesList.map(async (folderName) => {
    fs.copySync(
      `./examples/${folderName}/package.json`,
      `./scripts/generate-starters/examples/${folderName}/package.json`
    );
    //
    fs.rmdirSync(`./examples/${folderName}`, { recursive: true });
    //
    await copyFolder(
      './scripts/generate-starters/base-starter',
      `./examples/${folderName}`
    );
    await copyFolder(
      `./scripts/generate-starters/examples/${folderName}`,
      `./examples/${folderName}`
    );
  });

  console.log('End Starters Generator');
};

generateStarters();
