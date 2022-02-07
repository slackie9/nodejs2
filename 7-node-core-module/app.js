// core module
// file system

const fs = require('fs');

// // menuliskan string ke file secara syncronous
// try{
//   fs.writeFileSync('data/test.txt', 'Hello world secara syncronous')
// } catch(e){
//   console.log(e)
// }


// fs.writeFile('data/test.txt', 'Hello World secara Asynchrounous', (e) => {
//   console.log(e)
// } )

// const data = fs.readFileSync('data/test.txt', 'utf-8');

// readfile = fs.readFile('data/test.txt', 'utf-8', (err, data) => {
//   if(err) throw err;
//   console.log(data)
// })



// readline

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output:  process.stdout, 
});

rl.question('Insert your name, please ', (name)=>{
  rl.question('Insert your number Phone ', (numberPhone)=> {
    const contact = { name, numberPhone,}
    const file = fs.readFileSync('data/contacts.json', 'utf8');
    const contacts = JSON.parse(file);
    contacts.push(contact)
    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts))
    console.log('Thanks input the data')
    rl.close();
  })
})


