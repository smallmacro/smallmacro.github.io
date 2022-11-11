
const express = require('express');
const jobRoutes = express.Router();
const dbo = require('../db/conn')
const ObjectId = require('mongodb').ObjectId

//list all jobs
jobRoutes.route('/api/jobs/').get(async (req, res) => {
  try {
    const db_connect = dbo.getDb();
    const collection = await db_connect.collection('jobs');
    const jobs = await collection.find({}).toArray();
    
    res.json(jobs);
  } catch (err) {
    console.error(err);
  } finally{
    // await client.close();
  }
 
  
});


//get a specified job with an id 
jobRoutes.route('/api/jobs/:id').get( async (req, res) => {
  try {
    const db_connect = dbo.getDb();
    const collection = await db_connect.collection(process.env.COLLECTION_NAME);
    const query = { _id: ObjectId(req.params.id) };
    const job = await collection.findOne(query);
    
    res.json(job)
  } catch (error) {
    console.error(error);
  }
}).delete( async (req, res) => {
  try {
    const db_connect = dbo.getDb();
    const collection = await db_connect.collection(process.env.COLLECTION_NAME);
    const query = { _id: ObjectId(req.params.id) };
    const job = await collection.deleteOne(query);
    res.status(200).end("resource deleted successfully");
  } catch (error) {
    console.error(error);
  }
}).put( async(req, res) => {
  try {
    const db_connect = dbo.getDb();
    const collection = await db_connect.collection(process.env.COLLECTION_NAME);
    const query = { _id: ObjectId(req.params.id)};

    const updateObj = req.body;
    const result = await collection.updateOne(query, { $set: updateObj});
    console.log(`${result.modifiedCount} document(s) was/were updated`)
    res.status(200).end("resource updated successfully")
  } catch (error) {
    console.error(error)
  }
})

// create a job
jobRoutes.route('/api/jobs/create').post( async(req, res) => {
  try {
    const db_connect= dbo.getDb();
    const collection = await db_connect.collection(process.env.COLLECTION_NAME);
    const newJob = req.body;
    const result = await collection.insertOne(newJob);
    console.log(result.insertedId);
    res.status(201).end("Successfully created")
    
  } catch (error) {
    console.error(error)
  }
})

//create multiple jobs
// jobRoutes.route('/api/jobs/createmany').post( async(req, res) => {
//   try {
//     const db_connect = dbo.getDb();
//     const collection = await db_connect.collection(process.env.COLLECTION_NAME);
//     const multiJobs = req.body;
//     console.log( multiJobs);
//     // const result = collection.insertMany(multiJobs);
//     // console.log(result.insertedCount);
//     if (!multiJobs) {
//       throw Error;
//     }else{
//       res.status(201).end("Successfully created");
//     }
    
//   } catch (error) {
//     console.error(error)
//   }
// })

module.exports = jobRoutes;