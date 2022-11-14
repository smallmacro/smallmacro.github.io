// const Mongoose = require('mongoose');
const mongoose = require('../db/conn')


const JobSchema = new mongoose.Schema({
  
  "company": {
    type: String,
    unique: true,
    required: true,
  },
  "logo": {
    type: String,
  },
  "logoBackground":{
    type:String,
  },
  "position":{
    type:String,
    required: true,
  },
  "postedAt": {
    type: String,
    required: true,
  },
  "contract":{
    type:String,
    required: true,
  },
  "apply":{
    type: String,
  },
  "description":{
    type: String,
  },
  "requirements": {
    content: String,
    items: [{ type:String}],
  },
  "role": {
    content: String,
    items: [{ type:String}],

    // default: undefined,
  },
}, {
  collection:'jobs'
})

const Job = mongoose.model('job', JobSchema);
module.exports = Job