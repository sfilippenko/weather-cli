import chalk from 'chalk';
import dedent from 'dedent';

export const logError = (errorMessage) => {
  console.log(`${chalk.bgRed('ERROR')} ${errorMessage}`);
}

export const logSuccess = (message) => {
  console.log(`${chalk.bgGreen('SUCCESS')} ${message}`);
}

export const logHelp = () => {
  console.log(dedent`
    ${chalk.bgCyan('HELP')}
    -h - вывод помощи
    -c [CITY] - установка города
    -t [TOKEN] - сохранение токена
    Без параметров - вывод погоды
  `)
}