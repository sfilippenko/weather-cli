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

export const saveStorageValues = async (values) => {
  let data = {}
  if (await isFileExist(filePath)) {
    const file = await promises.readFile(filePath);
    data = JSON.parse(file);
  }
  data = {
    ...data,
    ...values,
  }
  await promises.writeFile(filePath, JSON.stringify(data, null, 2));
}

export const getStorageValues = async () => {
  if (isFileExist(filePath)) {
    const file = await promises.readFile(filePath);
    return JSON.parse(file);
  }
  return undefined;
}