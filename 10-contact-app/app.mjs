import  yargs from 'yargs';
import { hideBin } from 'yargs/helpers'
// import yargs from 'https://deno.land/x/yargs/deno.ts'
// const contacts = require('./contacts')
import * as contacts from './contacts.mjs'


yargs(hideBin(process.argv)).command({
  command: 'add',
  describe: 'add new contact',
  builder: {
    name: {
      describe: 'Full Name',
      demandOption: true,
      type: 'string' 
    },
    email: {
      describe: 'Email',
      demandOption: true,
      type: 'string'
    },
    phoneNumber: {
      describe: 'Phone Number',
      demandOption: true,
      type: 'string'
    },
  },
  handler(argv){
    contacts.saveContact(argv.name, argv.email, argv.phoneNumber)

  }
})
.demandCommand()
.parse();

yargs(hideBin(process.argv)).command({
  command: 'list',
  describe: 'Show name and phone number',
  handler(){
    contacts.listContact();
  }
})
.parse()

//Show detail contact

yargs(hideBin(process.argv)).command({
  command: 'detail',
  describe: 'Show detail a contact base name contact',
  builder: {
    name: {
      describe: 'Full Name',
      demandOption: true,
      type: 'string' 
    },
  },
  handler(argv){
    contacts.detailContact(argv.name);
  }
})

.parse()
//remove contact
yargs(hideBin(process.argv)).command({
  command: 'delete',
  describe: 'delete a contact base namecontact',
  builder: {
    name: {
      describe: 'Full Name',
      demandOption: true,
      type: 'string' 
    },
  },
  handler(argv){
    contacts.deleteContact(argv.name);
  }
})
.parse()


