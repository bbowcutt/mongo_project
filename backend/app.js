const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const port = 3001
const { Store, Item } = require('./models.js');
const {storeRouter} = require('./routes/stores.js'); 


app.use(cors());
app.use(express.json());

const storeRouter = Router(); 
const itemRouter = Router(); 

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

storeRouter.get('/stores', async (req, res) => {
  const stores = await Store.find();
  res.send(stores);
});

storeRouter.get('stores/:storeId', async (req, res) => {
  const storeId = req.params.storeId;
  try {
    const store = await Store.findOne({ _id: storeId });
    console.log(store);
    if (store === null) {
      res.status(404);
      res.json({
        status: 404,
        message: 'not found',
      });
      return;
    }
    // The MongoDB driver returns data as JavaScript objects, so we don't need to parse them to pass them to the `json` method of
    // Express' `Response` object
    res.json(store);
  } catch (e) {
    console.log(e);
    res.status(500);
    res.send('');
  }
});

storeRouter.post("/stores/new", async (req, res) => {
  const requestBody = req.body;
  requestBody._id = uuidv4();

  try {
    const result = await new Store(requestBody).save();
    console.log(result);
    res.status(201);
    res.json({
      status: 201,
      message: 'created',
    });
  } catch (e) {
    console.log(e);
    res.status(500);
    res.json({
      status: 500,
      message: e,
    });
  }
}); 


app.use('stores', storeRouter); 


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
