const fs = require('fs-extra');

const getStartersList = async (folder) => {
  return fs
    .readdirSync(`./scripts/generate-starters/builds/${folder}`)
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
      `./builds/starters/${folderName}/package.json`,
      `./scripts/generate-starters/builds/starters/${folderName}/package.json`
    );
    //
    fs.rmdirSync(`./builds/starters/${folderName}`, { recursive: true });
    //
    await copyFolder(
      './scripts/generate-starters/base-starter',
      `./builds/starters/${folderName}`
    );
    await copyFolder(
      `./scripts/generate-starters/builds/starters/${folderName}`,
      `./builds/starters/${folderName}`
    );
  });

  const examplesList = await getStartersList('examples');
  examplesList.map(async (folderName) => {
    fs.copySync(
      `./builds/examples/${folderName}/package.json`,
      `./scripts/generate-starters/builds/examples/${folderName}/package.json`
    );
    //
    fs.rmdirSync(`./builds/examples/${folderName}`, { recursive: true });
    //
    await copyFolder(
      './scripts/generate-starters/base-starter',
      `./builds/examples/${folderName}`
    );
    await copyFolder(
      `./scripts/generate-starters/builds/examples/${folderName}`,
      `./builds/examples/${folderName}`
    );
  });

  console.log('End Starters Generator');
};

generateStarters();
