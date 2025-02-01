#!/usr/bin/env node
import parser from 'yargs-parser';

const init = () => {
  const args = parser(process.argv.slice(2));
  console.log(args)
  if (args.h || args.help) {
    console.log('help')
  }
  if (args.c) {
    // Save city
  }
  if (args.t) {
    // Save token
  }
  // Weather
}

init();