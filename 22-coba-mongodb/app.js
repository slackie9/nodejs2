const { MongoClient } = require('mongodb')
const ObjectId = require('mongodb').ObjectId;

const uri = "mongodb://127.0.0.1:27017";
const dbName = "slackie";

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

client.connect((error, client) => {
  if (error) {
    return console.log("Koneksi gagal");
}

// pilih database

const db = client.db(dbName);

//menambahkan 1 data ke collection mahasiswa
    // db.collection("mahasiswa").insertOne(
    //     {
    //         nama: "Nobita nobi",
    //         email: "nobitanobi@mail.com",
    //     },
    //     (error, result) => {
    //         if (error) {
    //             return console.log("gagal menambahkan data");
    //         }
    //         console.log(result);
    //     }
    // );

   //Menambahkan lebih dari 1 data

    //   db.collection("mahasiswa").insertMany(
    //     [
    //         {
    //             nama: "nobitas",
    //             email: "nobita@nobita.com",
    //         },
    //         {
    //             nama: "Shizuka Minamoto",
    //             email: "shizuka@shizukaminamoto.com",
    //         },
    //     ],
    //     (error, result) => {
    //         if (error) {
    //             return console.log("Gagal Menambahkan data");
    //         }
    //         console.log(result);
    //     }
    // );

    // // Menampilkan semua data yang ada di collection atau table mahasisw
    // console.log(
    //     db
    //         .collection("mahasiswa")
    //         .find()
    //         .toArray((error, result) => {
    //             console.log(result);
    //         })
    // );
    // Menampilkan data berdasarkan kriteria yang ada di collection atau table mahasiswa

    // console.log(
    //     db
    //         .collection("mahasiswa")
    //         .find({ _id: ObjectId("62009796fe7e879d4c91c091")})
    //         .toArray((error, result) => {
    //             console.log(result);
    //         })
    // );

       // Mengubah data berdsasarkan id
    // const updatePromise = db.collection("mahasiswa").updateOne(
    //     {
    //         _id: ObjectId("6200ca3180bf11571dc971c9"),
    //     },
    //     {
    //         $set: {
    //             email: "shizuka@minamoto.com",
    //         },
    //     }
    // );
    //     updatePromise
    //     .then((result) => {
    //         console.log(result);
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     });

    //   db.collection("mahasiswa").updateMany(
    //     {
    //         nama: "Nobita",
    //     },
    //     {
    //         $set: {
    //             nama: "Nobita nobi",
    //         },
    //     }
    // );

        // menhapus 1 data
    // db.collection("mahasiswa")
    //     .deleteOne({
    //         _id: ObjectId("6200ca3180bf11571dc971c9"),
    //     })
    //     .then((result) => {
    //         console.log(result);
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     });    

        //menghapus lebih dari 1 data
        db.collection("mahasiswa")
        .deleteMany({
            nama: "Nobita nobi",
        })
        .then((result) => {
            console.log(result);
        })
        .catch((error) => {
            console.log(error);
        });
})
