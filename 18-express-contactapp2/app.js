const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const {loadContact, findContact, addContact, cekDuplikat} = require('./utils/contacts')
const { body, validationResult, check } = require('express-validator')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const flash  = require('connect-flash')

const app = express()
const port = 3000 
 
//gunakan ejs
app.set('view engine', 'ejs')

// Third party middleware
app.use(expressLayouts)

// Built-in middleware

app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))


//konfigurasi flash

app.use(cookieParser("secret"));
app.use(
    session({
        cookie: { maxAge: 6000 },
        secret: "secret",
        resave: true,
        saveUninitialized: true,
    })
);

app.use(flash());


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
    msg: req.flash('msg'),
  })
})
// halaman form tambah data contact
app.get('/contact/add',(req, res)=>{
  res.render('add-contact', {
    layout:'layouts/main-layout',
    title: 'Form tambah contact',

  })
})

//proses data contact
app.post('/contact',[
  body('nama').custom((value) =>{
    const duplikat = cekDuplikat(value)
    if (duplikat){
      throw new Error('Nama Contact sudah digunakan ')
    }
    return true
  }),
  check('email', 'Email tidak valid').isEmail(),
  check('nohp', 'Nomor handphone tidak valid').isMobilePhone('id-ID'),
  // body('nama').is(),
],
(req,res)=>{
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // return res.status(400).json({ errors: errors.array() });
    res.render('add-contact', {
      layout:'layouts/main-layout',
      title: 'Form tambah contact',
      errors: errors.array(),
    } )
  } else {
    addContact(req.body)
    //kirimkan flash message 
    req.flash('msg', 'Data Contact berhasil di tambahkan')
    res.redirect('/contact')
  }
})



//halaman detail contact
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






