const express = require("express");
const expressLayouts = require("express-ejs-layouts");

require("./utils/db");
const { Contact } = require("./model/contact");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const flash = require("connect-flash");

const app = express();
const port = 3000;

// gunakan ejs

app.set("view engine", "ejs");
app.use(expressLayouts);
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));


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


//Halaman home

app.get("/", (req, res) => {
  // res.sendFile("./index.html", { root: __dirname });
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
  res.render("index", {
      nama: "Slackie",
      title: "Halaman Home",
      mahasiswa,
      layout: "layouts/main-layout",
      title: "Halaman Index",
  });
});

// Halaman About
app.get("/about", (req, res) => {
  res.render("about", {
      layout: "layouts/main-layout",
      title: "Halaman About",
  });
});

// Halaman Contact
app.get("/contact", async (req, res) => {
  // Contact.find().then((contact) => {
  //     res.send(contact);
  // });
  const contacts = await Contact.find();
  res.render("contact", {
      layout: "layouts/main-layout",
      title: "Halaman Contact",
      contacts,
      msg: req.flash("msg"),
  });
});

//halaman detail contact
app.get("/contact/:nama", async (req, res) => {
  const contact = await Contact.findOne({ nama: req.params.nama });
  res.render("detail", {
      layout: "layouts/main-layout",
      title: "Halaman Detail",
      contact,
  });
});

app.listen(port, () => {
  console.log(`Mongo Contact App | listening at http://localhost:${port}`);
});