const {v4:uuid4} =require('uuid');
const { Router } = require('express');
//import * as fs from 'node:fs/promises';
const {Item} =  require('../models.js'); 

const itemRouter = Router(); 

itemRouter.get('/', async (req, res) => {
    const stores = await Store.find();
    res.send(stores);
  });

itemRouter.get('stores/:storeId', async (req, res) => {
    const itemId = req.params.itemId;
    try {
      const item = await Item.findOne({ _id: itemId });
      console.log(item);
      if (item === null) {
        res.status(404);
        res.json({
          status: 404,
          message: 'not found',
        });
        return;
      }
      // The MongoDB driver returns data as JavaScript objects, so we don't need to parse them to pass them to the `json` method of
      // Express' `Response` object
      res.json(item);
    } catch (e) {
      console.log(e);
      res.status(500);
      res.send('');
    }
  });


itemRouter.post("/stores/new", async (req, res) => {
    const requestBody = req.body;
    requestBody._id = uuid.v4();
  
    try {
      const result = await new Item(requestBody).save();
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

 

  module.exports = {itemRouter}; 