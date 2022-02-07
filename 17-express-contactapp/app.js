const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const {loadContact, findContact} = require('./utils/contacts')

const app = express()
const port = 3000

//gunakan ejs
app.set('view engine', 'ejs')

// Third party middleware
app.use(expressLayouts)

// Built-in middleware

app.use(express.static('public'))




app.get('/', (req, res) => {
  const mahasiswa = [
    {
        nama: "Slackie",
        email: "slackie@mail.com",
    },
    {
        nama: "Nobita",
        email: "nobita@mail.com",
    },
    {
        nama: "shizuka",
        email: "shizuka@mail.com",
    },
]; 
  res.render('index', {
    layout:'layouts/main-layout',
    nama:'Nobita',
    title:'Halaman Home',
    mahasiswa,
  })
})
app.get('/about', (req, res) => {
  res.render('about', {
    layout:'layouts/main-layout',
    title: 'Halaman about',}
    )
})
app.get('/contact', (req, res) => {
  const contacts = loadContact()
  console.log(contacts) 
  res.render('contact', {
    layout:'layouts/main-layout',
    title: 'Halaman contact',
    contacts,
  })
})
app.get('/contact/:nama', (req, res) => {
  const contact = findContact(req.params.nama) 
    
  res.render('detail', {
    layout:'layouts/main-layout',
    title: 'Detail contact',
    contact,
  })
})



app.use('/', (req,res)=>{
  res.status(404)
  res.send('<h1>404</h1>')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) 






