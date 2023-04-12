const {v4:uuid4} =require('uuid');

const { Router } = require('express');
//import * as fs from 'node:fs/promises';
const {Item} =  require('../models.js'); 

// const uuidv4 = require('uuid');
// const { Router } = require('express');
// //import * as fs from 'node:fs/promises';
// const {Store} =  require('../models.js'); 

const storeRouter = Router(); 

storeRouter.get('/', async (req, res) => {
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

 

module.export = {storeRouter} ; 