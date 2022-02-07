function cetakNama(nama){
  return`Hello, nama saya ${nama}`;
}

const PI = 3.14

const mahasiswa = {
  nama: 'Nobita',
  umur : 7,
  cetakMhs (){
    return `Halo, nama saya ${this.nama} dan saya ${this.umur} tahun`;
  }
}

class Orang {
  constructor() {
    console.log('Objek orang telah di buat');
  }
}




module.exports = {
  cetakNama,
  PI,
  mahasiswa,
  Orang,
}