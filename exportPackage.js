// exportPackage.js
const fs = require('fs');

const packageJson = JSON.parse(fs.readFileSync('./package.json'));
const packageVersion = packageJson.version;

const existingConfigFile = fs.readFileSync('./src/config.ts', 'utf-8');

// Update or add the version property in config.ts
const updatedConfigFile = existingConfigFile.replace(
  /version:\s*'([^']+)'/,
  `version: '${packageVersion}'`
);

fs.writeFileSync('./src/config.ts', updatedConfigFile);
