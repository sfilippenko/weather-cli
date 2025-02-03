#!/usr/bin/env node
import parser from 'yargs-parser';
import {logHelp, logSuccess, logError} from './services/log.js'
import {saveStorageValues} from "./services/storage.js";
import {getWeather} from "./services/api.js";

const saveToken = async (token) => {
  try {
    await saveStorageValues({token});
    logSuccess('Токен сохранен')
  } catch (error) {
    logError(error.message)
  }
}

const init = async () => {
  const {h, help, c: city, t: token} = parser(process.argv.slice(2));
  if (h || help) {
    logHelp();
    return;
  }
  if (city) {
    await saveStorageValues({city});
  }
  if (token) {
    await saveToken(token)
  }
  try {
    const weather = await getWeather();
    logSuccess(`${weather.name}: ${weather.main.temp} градусов, ${weather.weather[0]?.description}`);
  } catch (error) {
    logError(error.response?.data?.message || error.message);
  }
}

init();