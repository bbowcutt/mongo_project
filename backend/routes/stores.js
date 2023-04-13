const {v4:uuid4} =require('uuid');
const express = require('express'); 
//import * as fs from 'node:fs/promises';
const storeRouter = express.Router(); 
const {Store, Item} =  require('../models.js'); 
const itemRouter = require('./items.js'); 

// const uuidv4 = require('uuid');
// const { Router } = require('express');
// //import * as fs from 'node:fs/promises';
// const {Store} =  require('../models.js'); 



storeRouter.get('/', async (req, res) => {
    const stores = await Store.find();
    res.send(stores);
  });

storeRouter.get('/:storeId', async (req, res) => {
    console.log("store router store id", req.params.storeId); 

    const items = await Item.find({ "store_id": req.params.storeId});
    res.send(items);
    // const storeId = req.params.storeId;
    // console.log("stores StoreId: ", storeId); 
    // try {
    
    // //const store = await Item.find({});

    //   //console.log("store" , store);
    //   if (store === null) {
    //     res.status(404);
    //     res.json({
    //       status: 404,
    //       message: 'not found',
    //     });
    //     res.send(store);
    //   }
    //   // The MongoDB driver returns data as JavaScript objects, so we don't need to parse them to pass them to the `json` method of
    //   // Express' `Response` object
    //   res.json(store);
    // } catch (e) {
    //   console.log(e);
    //   res.status(500);
    //   res.send('');
    // }
  });


storeRouter.post("/new", async (req, res) => {
    const requestBody = req.body;
    console.log(requestBody); 
    requestBody._id = uuid4();
  
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

storeRouter.use("/:storeId/items", itemRouter);


module.exports = storeRouter ; 