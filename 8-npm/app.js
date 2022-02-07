import chalk from 'chalk';

import validator from 'validator';

// console.log(validator.isEmail('Nobita@gmail.com'))
// console.log(validator.isMobilePhone('0812345678', 'id-ID'))
// console.log(validator.isNumeric('0812345678',)) 



// console.log(chalk.italic.black.bgBlue('Hello world!'));
const pesan = `Lorem ipsum dolor ${chalk.bgRed ('sit amet')} consectetur adipisicing elit. Quibusdam, architecto.`;

console.log(pesan)

console.log(` 2 + 3 = ${chalk.bold.green (2 + 3)}`);

console.log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);