
const express = require('express');
const jobRoutes = express.Router();
const Job = require('../models/Jobs');
const User = require('../models/User');
const ObjectId = require('mongodb').ObjectId

//list all jobs
jobRoutes.route('/').get(async (req, res) => {
  try {
    // const db_connect = dbo.getDb();
    const jobs = await Job.find({}).populate('user', {
      username:1,
      email:1,
    });
    // const collection = await db_connect.collection('jobs');
    // const jobs = await collection.find({}).toArray();
    
    res.json(jobs);
  } catch (err) {
    console.error(err);
    res.status(404).end()
  } finally{
    // await client.close();
  }
});


//get a specified job with an id 
jobRoutes.route('/:id').get( async (req, res, next) => {
  try {
    // const db_connect = dbo.getDb();
    // const collection = await db_connect.collection(process.env.COLLECTION_NAME);
    const query = { _id: ObjectId(req.params.id) };
    const job = await Job.findOne(query);
    
    res.json(job)
  } catch (error) {
    console.error(error);
    next(error);

  }
}).delete( async (req, res, next) => {
  try {
    // const db_connect = dbo.getDb();
    // const collection = await db_connect.collection(process.env.COLLECTION_NAME);
    const query = { _id: ObjectId(req.params.id) };
    const job = await Job.deleteOne(query);
    
    res.status(204).end();
  } catch (error) {
    console.error(error);
    next(error);
    
  }
}).put( async(req, res,next) => {
  try {
    // const db_connect = dbo.getDb();
    // const collection = await db_connect.collection(process.env.COLLECTION_NAME);
    const query = { _id: ObjectId(req.params.id)};

    const updateObj = req.body;
    // const result = await Job.updateOne(query, { $set: updateObj});
    await Job.findOneAndUpdate(query,updateObj);
    // console.log(`${result.modifiedCount} document(s) was/were updated`)
    res.status(200).end("resource updated successfully")
  } catch (error) {
    console.error(error);
    next(error);
  }
})

// create a job
jobRoutes.route('/create').post( async(req, res, next) => {
  try {
    // const db_connect= dbo.getDb();
    // const collection = await db_connect.collection(process.env.COLLECTION_NAME);
    const body = req.body
    const {
      company,
      logo,
      logoBackground,
      position,
      postedAt,
      contract,
      apply,
      description,
      requirements,
      role
    } = body
    const user = await User.findById(body.userId)
    const job = new Job({
      company,
      logo,
      logoBackground,
      position,
      postedAt,
      contract,
      apply,
      description,
      requirements,
      role, 
      user:user._id
    });
    const savedJob = await job.save();
    user.jobs = user.jobs.concat(savedJob._id)
    await user.save()
    // console.log(result.insertedId);
    res.status(201).json(savedJob)
    
  } catch (error) {
    console.error(error);
    next(error);
    res.status(400).end()
  }
})

// create multiple jobs
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