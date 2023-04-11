const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const port = 3001
const { Store, Item } = require('./models.js');

app.use(cors());
app.use(express.json());

const dbUrl = 'mongodb://127.0.0.1:27017/stores';
mongoose.connect(dbUrl);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connected to database!")
});

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// const storeExample = new Store({ name: "PT", _id: "e512aa28-0b4a-4667-a7df-e047bd6994e0" });
// storeExample.save();

app.get('/', async(req, res) => {
    const stores = await Store.find({});
    res.send({ stores })
    // res.send('stores', { stores });
})

// app.get('/stores/storeId', async(req, res) => {
//   const stores = await Store.find({storeId});
//   res.send({ stores })
//   // res.send('stores', { stores });
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
