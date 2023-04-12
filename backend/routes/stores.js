import { v4 as uuidv4 } from 'uuid';
import { Router } from 'express';
import * as fs from 'node:fs/promises';
import {Store} from './models.js'; 

const storeRouter = Router(); 


blogRouter.get('/', async (req, res) => {
    const stores = await Store.find();
  
    res.send(stores);
  });

blogRouter.get('stores/:storeId', async (req, res) => {
    const storeId = req.params.storeid;
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

storeRouter.get('/stores/:storeId', async (req, res) => {
	const storeId = req.params.storeId; 
    try{ 
        const currTodo = await fs.readFile(`storage/${storeId}.json`); 
        res.json(JSON.parse(currTodo));
    }catch (error){
        console.log(error); 
        res.status(500); 
        res.send('Get request failed'); 
    }
}); 

storeRouter.post("/stores/new", async (req, res) => {
    const requestBody = req.body;
    store._id = uuidv4();
  
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
  })

 

export default todoRouter; 