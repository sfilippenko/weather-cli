import {homedir} from 'os';
import {join} from 'path';
import {promises} from 'fs';

const filePath = join(homedir(), 'weather-data.json');

const isFileExist = async (filePath) => {
  try {
    await promises.access(filePath);
    return true;
  } catch (error) {
    return false;
  }
}

export const saveStorageValue = async (key, value) => {
  let data = {}
  if (await isFileExist(filePath)) {
    const file = await promises.readFile(filePath);
    data = JSON.parse(file);
  }
  data[key] = value
  await promises.writeFile(filePath, JSON.stringify(data, null, 2));
}

export const getStorageValue = async (key) => {
  if (isFileExist(filePath)) {
    const file = await promises.readFile(filePath);
    return JSON.parse(file)[key]
  }
  return undefined;
}