const fs = require("fs")
let rawData = fs.readFileSync('./data.json')
let jobs = JSON.parse(rawData)

const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000;
app.use(express.json())


app.get("/", (request, response) => {
  response.send("Hello World!")
})

app.get("/api/jobs", (request, response) => {
  
  response.json(jobs);
});
app.get("/api/jobs/:id",(request, response) =>{
  const id = Number(request.params.id);
  const job =  jobs.find(job => job.id === id);
  if(!job){
    response.status(404).end("No such job!")
  }else{
    response.json(job); 
  }
  
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
