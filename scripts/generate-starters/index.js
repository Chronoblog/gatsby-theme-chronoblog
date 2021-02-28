const fs = require('fs-extra');

const getStartersList = async () => {
  return fs
    .readdirSync(`./scripts/generate-starters/starters`)
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

  const startersList = await getStartersList();

  startersList.map(async (folderName) => {
    fs.rmdirSync(`./starters/${folderName}`, { recursive: true });
    await copyFolder(
      './scripts/generate-starters/base-starter',
      `./starters/${folderName}`
    );
    await copyFolder(
      './scripts/generate-starters/starters/chronoblog',
      `./starters/${folderName}`
    );
  });

  console.log('End Starters Generator');
};

generateStarters();
