const path = require('path');
const fs = require('fs-extra');

const getStartersList = async (folder) => {
  return await fs.readdir(`./scripts/generate-starters/${folder}`);
};

const getAllFiles = async (dirPath) => {
  const files = await fs.readdir(dirPath);
  const filesWithPatch = files.map((file) => `${dirPath}/${file}`);
  return filesWithPatch;
};

const getAllFilesPatchWithForMerge = async (folder) => {
  const allFiles = await getAllFiles(folder);
  const onlyForMerge = allFiles.filter((file) =>
    path.basename(file).includes('.for-merge.json')
  );
  return onlyForMerge;
};

const rmAllFilesPatchWithForMerge = async (folder) => {
  const allForMerge = await getAllFilesPatchWithForMerge(folder);
  await Promise.all(
    allForMerge.map(async (file) => await fs.unlink(`./${file}`))
  );
};

const generateStarter = async (folderTypeName) => {
  const startersList = await getStartersList(folderTypeName);
  startersList.map(async (folderName) => {
    //
    await fs.ensureDir(`./${folderTypeName}/${folderName}`);
    //
    const allForMerge = await getAllFilesPatchWithForMerge(
      `./${folderTypeName}/${folderName}`
    );
    const objectsForFiles = await Promise.all(
      allForMerge.map(async (file) => {
        const fileObj = await fs.readJson(file);
        //
        const thisFileInBase = file.replace(/\.for-merge/, '');
        const thisFileInBaseAsObj = await fs.readJson(thisFileInBase);
        //
        const mergedObj = { ...thisFileInBaseAsObj, ...fileObj };
        return { fileName: thisFileInBase, mergedObj };
      })
    );
    //
    await fs.remove(`./${folderTypeName}/${folderName}`);
    //
    await fs.copy(
      './scripts/generate-starters/base-starter',
      `./${folderTypeName}/${folderName}`
    );
    await fs.copy(
      `./scripts/generate-starters/${folderTypeName}/${folderName}`,
      `./${folderTypeName}/${folderName}`
    );
    //
    await Promise.all(
      objectsForFiles.map(async (obj) => {
        await fs.writeJson(`./${obj.fileName}`, obj.mergedObj, { spaces: 2 });
      })
    );
    //
    await rmAllFilesPatchWithForMerge(`./${folderTypeName}/${folderName}`);
  });
};

const generateStarters = async () => {
  await generateStarter('test-builds');
  await generateStarter('examples');
  await generateStarter('starters');
};

(async () => await generateStarters())();
