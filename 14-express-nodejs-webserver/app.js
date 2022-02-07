const express = require('express')
const app = express()
const port = 3000



app.get('/', (req, res) => {
  // res.send('Hello World!')
  // res.json({
  //       nama: "Slackie",
  //       email: "slackie@mail.com",
  //       noHP: "08123456789",
  //   });
  res.sendFile('./index.html', {root:__dirname})
})
app.get('/about', (req, res) => {
  // res.send('Ini adalah halaman about')
  res.sendFile('./about.html', {root:__dirname})
})
app.get('/contact', (req, res) => {
  // res.send('Ini adalah halaman contact')
  res.sendFile('./contact.html', {root:__dirname})
})

app.get("/product/:id", (req, res) => {
  res.send(`Product ID : ${req.params.id} <br> Category ID : ${req.query.category} `);
});


app.use('/', (req,res)=>{
  res.status(404)
  res.send('<h1>404</h1>')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) 




// const fs  = require('fs');
// const http = require('http');


// const renderHTLM = (path, res) => {
//   fs.readFile(path, (err, data)=>{
//     if(err){
//       res.writeHead(404)
//       res.write('Error: file not found')
//     } else{
//       res.write(data)
//     } 
//     res.end();
//   })
// }

// http.createServer((req, res)=>{
//   res.writeHead(200, {
//     'Content-Type': 'text/html'
//   })
//   const url = req.url;
//   switch(url){
//     case '/about':
//       renderHTLM('./about.html',res)
//       break
//     case '/contact':
//       renderHTLM('./contact.html',res)
//       break
//     default:
//       renderHTLM('./index.html',res)
//       break
//   }


//   // console.log(url)
//   // if (url === '/about'){
//   //   renderHTLM('./about',res)
//   // } else if( url ==='/contact'){
//   //   renderHTLM('./contact.html', res)
//   // } else {
//   //   renderHTLM('./index.html', res)
//   // }

// })
// .listen(3000, ()=>{
//   console.log('Server is listening on port 3000..')
// })  



