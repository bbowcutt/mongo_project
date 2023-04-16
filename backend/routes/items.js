const {v4:uuid4} =require('uuid');
const express = require('express');
//import * as fs from 'node:fs/promises';
const {Item} =  require('../models.js'); 


const itemRouter = express.Router({mergeParams: true}); 

itemRouter.get('/', async (req, res) => {
  console.log('storeID is::::: ', req.params.storeId); 
    const items = await Item.find({store_id: req.params.storeId});
    console.log("Here are the items", items); 
    res.send(items);
  });

itemRouter.get('/:itemId', async (req, res) => {
    const storeId = req.params.storeId; //maybe ?? idk? 
    const itemId = req.params.itemId;
    try {
      const item = await Item.findOne({ "_id": itemId });
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
    console.log(req.body);
    const requestBody = req.body;
    console.log(requestBody);
    requestBody._id = uuid4();

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

    //console.log(req.params.store_id)
    //const newItem = await new Item({
      //_id: uuid4(), 
      //price: req.body.price, 
      //quantity: req.body.quantity, 
      //name: req.body.name,
      //store_id: "req.params.store_id",
    //}).save(); 
    //res.send("yay!"); 
    
  }); 

 

module.exports = itemRouter; 