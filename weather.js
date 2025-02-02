#!/usr/bin/env node
import parser from 'yargs-parser';
import {logHelp, logSuccess, logError} from './services/log.js'
import {saveStorageValue} from "./services/storage.js";

const saveToken = async (token) => {
  try {
    await saveStorageValue('token', token);
    logSuccess('Токен сохранен')
  } catch (error) {
    logError(error.message)
  }
}

const init = () => {
  const args = parser(process.argv.slice(2));
  if (args.h || args.help) {
    logHelp();
  }
  if (args.c) {
    saveStorageValue('city', args.c)
  }
  if (args.t) {
    saveToken(args.t)
  }
  // Weather
}

init();