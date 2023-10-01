import * as express from 'express';
import * as mongodb from 'mongodb';
import { collections } from './database';

export const blockRouter = express.Router();
blockRouter.use(express.json());

blockRouter.get('/', async (_req, res) => {
  try {
    const blocks = await collections.blocks.find({}).toArray();
    res.status(200).send(blocks);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

blockRouter.get('/:id', async (req, res) => {
  try {
    const id = req?.params?.id;
    const query = { _id: new mongodb.ObjectId(id) };
    const block = await collections.blocks.findOne(query);

    if (block) {
      res.status(200).send(block);
    } else {
      res.status(404).send(`Failed to find a block: ID ${id}`);
    }
  } catch (error) {
    res.status(404).send(`Failed to find a block: ID ${req?.params?.id}`);
  }
});

blockRouter.post('/', async (req, res) => {
  try {
    const block = req.body;
    const result = await collections.blocks.insertOne(block);

    if (result.acknowledged) {
      res.status(201).send(`Created a new block: ID ${result.insertedId}.`);
    } else {
      res.status(500).send('Failed to create a new block.');
    }
  } catch (error) {
    console.error(error);
    res.status(400).send(error.message);
  }
});

blockRouter.put('/:id', async (req, res) => {
  try {
    const id = req?.params?.id;
    const block = req.body;
    const query = { _id: new mongodb.ObjectId(id) };
    const result = await collections.blocks.updateOne(query, {
      $set: block,
    });

    if (result && result.matchedCount) {
      res.status(200).send(`Updated a block: ID ${id}.`);
    } else if (!result.matchedCount) {
      res.status(404).send(`Failed to find a block: ID ${id}`);
    } else {
      res.status(304).send(`Failed to update a block: ID ${id}`);
    }
  } catch (error) {
    console.error(error.message);
    res.status(400).send(error.message);
  }
});

blockRouter.delete('/:id', async (req, res) => {
  try {
    const id = req?.params?.id;
    const query = { _id: new mongodb.ObjectId(id) };
    const result = await collections.blocks.deleteOne(query);

    if (result && result.deletedCount) {
      res.status(202).send(`Removed a block: ID ${id}`);
    } else if (!result) {
      res.status(400).send(`Failed to remove a block: ID ${id}`);
    } else if (!result.deletedCount) {
      res.status(404).send(`Failed to find a block: ID ${id}`);
    }
  } catch (error) {
    console.error(error.message);
    res.status(400).send(error.message);
  }
});
