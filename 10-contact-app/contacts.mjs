// const { rejects } = require('assert');
import * as fs from 'fs';
// const { resolve } = require('path');
import chalk from 'chalk';
import validator from 'validator';

// made folder data
const dirPath = './data';
if(!fs.existsSync(dirPath)){
  fs.mkdirSync(dirPath);
}

// make file contacts.json 

const dataPath = './data/contacts.json';
if(!fs.existsSync(dataPath)){
  fs,fs.writeFileSync(dataPath, '[]', 'utf-8');
}

const loadContact = () =>{
  const fileBuffer = fs.readFileSync('data/contacts.json', 'utf8');
  const contacts = JSON.parse(fileBuffer);
  return contacts

}

const saveContact =(name, email, phoneNumber)=>{
  const contact = { name, email, phoneNumber}
  const contacts = loadContact();
  
  // cek duplicate
  const duplicate =  contacts.find((contact) => contact.name === name);
  if(duplicate){
    console.log(`${chalk.red.inverse.bold('Contact already exits, use another name!')}`);
    return false;
  }
  
  // cek email
  if(!validator.isEmail(email)){
    console.log(`${chalk.red.inverse.bold('email invalid')}`);
    return false;
  }
  
  if(!validator.isMobilePhone(phoneNumber, 'id-ID')){
    console.log(`${chalk.red.inverse.bold('number phone invalid')}`);
    return false;
  }
  
  


  contacts.push(contact)
  fs.writeFileSync('data/contacts.json', JSON.stringify(contacts))
  console.log(`${chalk.green.inverse.bold('Thanks input the data')}`)
}


const listContact =() =>{
  const contacts = loadContact();
  console.log(`${chalk.cyan.inverse.bold('List Contacts : ')}`)
  contacts.forEach((contact, i)=> {
    console.log(`${i+1}. ${contact.name} - ${contact.phoneNumber }`)
  })
}

const detailContact =(name) =>{
  const contacts = loadContact();
  const contact = contacts.find((contact)=> contact.name.toLowerCase() === name.toLowerCase())
  
  if(!contact){
    console.log(`${chalk.red.inverse.bold('Name didn\'t find ')}`)
    return false
  }
  
  console.log(`${chalk.cyan.inverse.bold(contact.name)}`) 
  console.log(`${contact.phoneNumber}`)
  if(contact.email){
    console.log(`${contact.email}`) 
  } 
  
}

const deleteContact =(name)=>{
  const contacts = loadContact()
  const newContacts = contacts.filter((contact)=> contact.name.toLowerCase() !== name.toLowerCase())  
  if(contacts.length === newContacts.length) {
    console.log(`${chalk.red.inverse.bold('name: ' + name + ' didn\'t find ')}`)
    return false
  }
  fs.writeFileSync('data/contacts.json', JSON.stringify(newContacts))
  console.log(`${chalk.green.inverse.bold(`${name} success delete`)}`)
}


export {saveContact, listContact, detailContact, deleteContact}