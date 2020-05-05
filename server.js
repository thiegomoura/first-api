const express = require("express");
const cors = require('cors');
const mongoose = require("mongoose");
const requireDir = require("require-dir");

//iniciando o App
const server = async() => {
  const app = express();
  app.use(express.json());
  app.use(cors());


//conectadno no BD
try {
  await mongoose.connect('mongodb://thiego:node123456@storage-shard-00-00-zr8pm.mongodb.net:27017,storage-shard-00-01-zr8pm.mongodb.net:27017,storage-shard-00-02-zr8pm.mongodb.net:27017/sarc?ssl=true&replicaSet=Storage-shard-0&authSource=admin&retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});
} catch (err) {
  console.log('Error ao conectar',err)
}

requireDir ('./src/models');

const Dweller = mongoose.model('Dweller');
const Room = mongoose.model('Room');
const Debit = mongoose.model('Debit')

//rotas
app.use("/api", require("./src/routes"));
app.listen(3001);

}

server();