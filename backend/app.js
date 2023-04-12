const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const port = 3001
const { Store, Item } = require('./models.js');
const {storeRouter} = require('./routes/stores.js'); 
const {itemRouter} = require('./routes/items.js'); 


app.use(cors());
app.use(express.json());


const dbUrl = 'mongodb://127.0.0.1:27017/stores';
mongoose.connect(dbUrl);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connected to database!")
});


app.get('/', async(req, res) => {
    const stores = await Store.find();
    res.send( stores )
}); 



app.use('/stores', storeRouter); 


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
