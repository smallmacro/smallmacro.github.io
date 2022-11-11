
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
    const collection = await db_connect.collection('jobs');
    const query = { _id: ObjectId(req.params.id) };
    const job = await collection.findOne(query);
    console.log(job);
    res.json(job)
  } catch (error) {
    
  }
})

module.exports = jobRoutes;