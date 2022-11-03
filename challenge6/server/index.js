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
    response.status(404).end("No such job id!")
  }else{
    response.json(job); 
  }
  
})
app.delete("/api/jobs/:id", (request, response) => {
  console.log(jobs.length)
  const id = Number(request.params.id);
  jobs =  jobs.filter(job => job.id !== id);

  console.log(jobs.length);
  response.status(204).end();
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
