const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const morgan = require('morgan')
const app = express()
const port = 3000

//gunakan ejs
app.set('view engine', 'ejs')

// Third party middleware
app.use(expressLayouts)
app.use(morgan('dev'))
// Built-in middleware

app.use(express.static('public'))



//  application level middleware
app.use((req,res,next)=> {
  console.log('TIme: ', Date.now())
  next()
})



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
  res.render('contact', {
    layout:'layouts/main-layout',
    title: 'Halaman contact',})
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






