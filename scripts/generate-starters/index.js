const path = require('path');
const fs = require('fs-extra');

const getStartersList = async (folder) => {
  return fs
    .readdirSync(`./scripts/generate-starters/${folder}`)
    .map((folderName) => folderName);
};

const getAllFiles = (dirPath, arrayOfFiles) => {
  const files = fs.readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles ? arrayOfFiles : [];

  files.forEach((file) => {
    if (fs.statSync(dirPath + '/' + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + '/' + file, arrayOfFiles);
    } else {
      arrayOfFiles.push(path.join(dirPath, '/', file));
    }
  });

  return arrayOfFiles;
};

const getAllFilesPatchWithForMerge = (folder) => {
  const allFiles = getAllFiles(folder);
  const onlyForMerge = allFiles.filter((file) =>
    path.basename(file).includes('.for-merge.json')
  );
  return onlyForMerge;
};

const rmAllFilesPatchWithForMerge = (folder) => {
  const allForMerge = getAllFilesPatchWithForMerge(folder);
  allForMerge.map((file) => fs.unlinkSync(`./${file}`));
};

const generateStarter = async (folderTypeName) => {
  const startersList = await getStartersList(folderTypeName);
  startersList.map(async (folderName) => {
    //
    fs.ensureDirSync(`./${folderTypeName}/${folderName}`);
    //
    const allForMerge = getAllFilesPatchWithForMerge(
      `./${folderTypeName}/${folderName}`
    );
    const objectsForFiles = allForMerge.map((file) => {
      const fileObj = JSON.parse(fs.readFileSync(file));
      //
      const thisFileInBase = file.replace(/\.for-merge/, '');
      const thisFileInBaseAsObj = JSON.parse(fs.readFileSync(thisFileInBase));
      //
      const mergedObj = { ...thisFileInBaseAsObj, ...fileObj };
      return { fileName: thisFileInBase, mergedObj };
    });
    //
    fs.rmSync(`./${folderTypeName}/${folderName}`, { recursive: true });
    //
    fs.copySync(
      './scripts/generate-starters/base-starter',
      `./${folderTypeName}/${folderName}`
    );
    fs.copySync(
      `./scripts/generate-starters/${folderTypeName}/${folderName}`,
      `./${folderTypeName}/${folderName}`
    );
    //
    objectsForFiles.map((obj) => {
      const data = JSON.stringify(obj.mergedObj, null, '\t');
      fs.writeFileSync(`./${obj.fileName}`, data);
    });
    //
    rmAllFilesPatchWithForMerge(`./${folderTypeName}/${folderName}`);
  });
};

const generateStarters = async () => {
  console.log('Start Starters Generator');

  await Promise.all(
    ['starters', 'test-builds', 'examples'].map(
      async (type) => await generateStarter(type)
    )
  );

  console.log('End Starters Generator');
};

generateStarters();
