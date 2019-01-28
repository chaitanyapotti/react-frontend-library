/* eslint-disable no-console */

import path from "path";
import { ncp } from "ncp";

async function copyFile() {
  const sourcePath = path.resolve(__dirname, "../build/");
  const destinationPath = path.resolve(__dirname, "../test/node_modules/react-frontend-library");
  await ncp(sourcePath, destinationPath);
  console.log(`Copied ${sourcePath} to ${destinationPath}`);
}

copyFile();
