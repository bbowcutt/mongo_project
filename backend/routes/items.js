const {v4:uuid4} =require('uuid');
const { Router } = require('express');
//import * as fs from 'node:fs/promises';
const {Item} =  require('../models.js'); 

// const uuidv4 = require('uuid');
// const { Router } = require('express');
// //import * as fs from 'node:fs/promises';
// const {Store} =  require('../models.js'); 

const itemRouter = Router(); 
itemRouter.mergeParams = true; 
itemRouter.get('/', async (req, res) => {
    const items = await Item.find();
    res.send(items);
  });

itemRouter.get('/:itemId', async (req, res) => {
    const storeId = req.params.storeId; //maybe ?? idk? 
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


itemRouter.post("/new", async (req, res) => {
    const storeId = req.params.storeId;
    const requestBody = req.body;
    console.log(requestBody); 
    requestBody._id = uuid4();
    console.log("store ID: ", storeId); 
    try {
        
      const result = await new Item({
        store_id: storeId, 
        price: req.body.price, 
        quantity: req.body.quanitity, 
        name: req.body.name,
        _id: uuid4()
      }).save();
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