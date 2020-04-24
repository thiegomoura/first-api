const express = require("express");
const cors = require('cors');
const mongoose = require("mongoose");
const requireDir = require("require-dir");

//iniciando o App
const app = express();
app.use(express.json());
app.use(cors());

//iniciando o DB
//mongoose.connect('mongodb://localhost:27017/nodeapi', {useNewUrlParser: true, useUnifiedTopology: true});

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://thiego:14dms%23Afz@storage-zr8pm.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true});
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

requireDir ('./src/models');

//const Dweller = mongoose.model('Dweller');

//rotas
app.use("/api", require("./src/routes"));

app.listen(3001);