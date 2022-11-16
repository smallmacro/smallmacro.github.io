const mongoose = require('mongoose')
const supertest = require('supertest')

const app = require('../app')

const api = supertest(app)
const Job = require('../models/Jobs')
const initialJobs = 
[
  {
  "company": "Scoot",
  "logo": "./assets/logos/scoot.svg",
  "logoBackground": "hsl(36, 87%, 49%)",
  "position": "Senior Software Engineer",
  "postedAt": "5h ago",
  "contract": "Full Time",
  "location": "United Kingdom",
  "website": "https://example.com/scoot",
  "apply": "https://example.com/scoot/apply",
  "description": "Scoot is looking for a Senior Software Engineer passionate about building approachable, innovative and user-first experiences to join our small but growing Engineering team. You will be responsible for building and maintaining front end functionality across all of Scoot’s applications, fostering a growing team of software engineers, and helping drive and maintain best software patterns and practices in our codebase.",
  "requirements": {
    "content": "The ideal candidate is as passionate about solving challenges through technology. They are well-versed in building proof of concepts from scratch and taking these POCs to production and scale. The right fit will have the engineering experience to build and iterate quickly and is comfortable working with product and design to set the technical strategy and roadmap.",
    "items": [
      "5+ years of industry experience in a software engineering role, preferably building a SaaS product. You can demonstrate significant impact that your work has had on the product and/or the team.",
      "Experience with scalable distributed systems, both built from scratch as well as on AWS primitives.",
      "Extremely data-driven.",
      "Ability to debug complex systems."
    ]
  },
  "role": {
    "content": "We are looking for a Senior Software Engineer to join as one of our first hires. As we iterate on our MVP, you will have the opportunity to drive the vision and own the build behind our digital experience. You’ll have the support of an experienced technical advisor, a Head of Product, and an external team to work with.",
    "items": [
      "This role is for someone who is excited about the early stage - you’ll be responsible for turning the platform vision into reality through smart, efficient building and testing.",
      "Translate the product roadmap into engineering requirements and own the engineering roadmap",
      "Work with limited resources to test and learn as efficiently as possible, while laying the framework to build a more scalable product over time.",
      "Collaborate with product, design, and external engineering teammates as needed."
    ]
  }
  },
  {
    "company": "Blogr",
    "logo": "./assets/logos/blogr.svg",
    "logoBackground": "hsl(12, 79%, 52%)",
    "position": "Haskell and PureScript Dev",
    "postedAt": "20h ago",
    "contract": "Part Time",
    "location": "United States",
    "website": "https://example.com/blogr",
    "apply": "https://example.com/blogr/apply",
    "description": "Blogr is looking for a part-time developer to join our six-strong team of full-stack engineers. Our core development values are strong, static typing and correctness, rigorous automation (in both testing and infrastructure) and everyone having a say.",
    "requirements": {
      "content": "We are looking to carefully add great developers which care about solving problems & which have been in a relationship with Purescript and/or Haskell for at least 3 years (Not necessarily monogamous though).",
      "items": [
        "You have a knack for UI design",
        "Have Haskell or Purescript knowledge/hacking under your belt.",
        "An experienced engineer familiar with automated testing and deployment.",
        "Experienced with functional programming and domain-driven design or simply interested and capable of learning on the job."
      ]
    },
    "role": {
      "content": "The role is more frontend-focused where you will be tasked to build browser-based UIs for Haskell applications.",
      "items": [
        "Build up our tech stack around Haskell and introduce best practices",
        "Contribute to the design of our conversational engine and the architecture supporting it",
        "Design new UIs, working closely with users, stakeholders and the backend team.",
        "Maximize robustness, performance, and scalability of solutions"
      ]
    }
  }
];

//insert initial data into a new database before all api test start
beforeAll(async () => {
  await Job.deleteMany({})
  console.log('Cleared')
  // const newJobs = initialJobs.map((job) => new Job(job))
  // const promiseArr = newJobs.map( job => job.save())
  // await Promise.all(promiseArr);
  await Job.insertMany(initialJobs)
  console.log('Done')

})
// get all jobs
describe('when there is initially some jobs saved', () => { 
  
  test('jobs are returned as json',async () => { 
    
    await api.get('/api/jobs')
    .expect(200)
    .expect('Content-Type', /application\/json/)
   })
  
  test('all jobs are returned', async () => { 
    const respone = await api.get('/api/jobs');
     expect(respone.body).toHaveLength(initialJobs.length)
  })
  test('a specific job is within the returned jobs',async () => { 
    const res = await api.get('/api/jobs')
    const positions = res.body.map( r => r.position)
    expect(positions).toContain("Senior Software Engineer")

  })
})

//create a new job
describe('addition of a new job', () => { 
  
  test('succeeds with a valid job', async () => { 
    const newJob = {
      "company": "Office Lite",
      "logo": "./assets/logos/officelite.svg",
      "logoBackground": "hsl(227, 62%, 48%)",
      "position": "Senior Application Engineer",
      "postedAt": "2d ago",
      "contract": "Full Time",
      "location": "Japan",
      "website": "https://example.com/officelite",
      "apply": "https://example.com/officelite/apply",
      "description": "Office Lite is seeking a talented and enthusiastic Senior Application Engineer whose primary responsibility is software architecture and development for Office Lite systems. Additional responsibilities include participation in project time/task estimation, code and architecture reviews, providing support for junior developers, documentation of system architecture and a supporting role for all phases of the development life-cycle (project definition, process mapping, architecture, coding, acceptance testing, installation, turnover to support, etc.).",
      "requirements": {
        "content": "As a hands-on subject matter expert, you will use expert-level engineering knowledge to provide technical support and help translate customer requirements into exciting new product features. You will be working within multi-disciplinary teams to create pervasive simulation solutions, advance your industry knowledge, and grow the business impact.​",
        "items": [
          "Expert Node.js proficiency in a production environment", 
          "Proficiency in developing REST APIs", 
          "Expert proficiency with relational databases (MySQL) and optimizing SQL queries", 
          "Extensive experience with microservices-based architecture in production", 
          "Experience with CircleCI, Jenkins or similar CI/CD applications"
        ]
      },
      "role": {
        "content": "You'll work alongside a skilled team of Senior Engineers across five countries participating in system design, architecture, maintenance, and refactoring decisions. You'll be working on new features and integrations and be active in code reviews and coordinating engineering efforts across teams and products.",
        "items": [
          "Administering and configuring software", 
          "Identify opportunity and help to implement a monitoring solution for proactive and predictable operations.", 
          "Triaging problems with applications - identifying known errors and problem trends and finding permanent solutions through root cause analysis.",
          "Providing level 2 and 3 application support."
        ]
      }
    }
  
    await api.post('/api/jobs/create')
      .send(newJob)
      .expect(201)
      .expect('Content-Type', /application\/json/);
    const respone = await api.get('/api/jobs')
    const postions = respone.body.map(r => r.position);
    expect(respone.body).toHaveLength(initialJobs.length + 1)
    expect(postions).toContain('Senior Application Engineer')
   })

  test('a job without postion is not added',async () => { 
    const newJob = {
      "company": "Office Lite",
      "logo": "./assets/logos/officelite.svg",
      "logoBackground": "hsl(227, 62%, 48%)",
      "contract": "Full Time",
      "location": "Japan",
      "website": "https://example.com/officelite",
      "apply": "https://example.com/officelite/apply",
      "description": "Office Lite is seeking a talented and enthusiastic Senior Application Engineer whose primary responsibility is software architecture and development for Office Lite systems. Additional responsibilities include participation in project time/task estimation, code and architecture reviews, providing support for junior developers, documentation of system architecture and a supporting role for all phases of the development life-cycle (project definition, process mapping, architecture, coding, acceptance testing, installation, turnover to support, etc.).",
      "requirements": {
        "content": "As a hands-on subject matter expert, you will use expert-level engineering knowledge to provide technical support and help translate customer requirements into exciting new product features. You will be working within multi-disciplinary teams to create pervasive simulation solutions, advance your industry knowledge, and grow the business impact.​",
        "items": [
          "Expert Node.js proficiency in a production environment", 
          "Proficiency in developing REST APIs", 
          "Expert proficiency with relational databases (MySQL) and optimizing SQL queries", 
          "Extensive experience with microservices-based architecture in production", 
          "Experience with CircleCI, Jenkins or similar CI/CD applications"
        ]
      },
      "role": {
        "content": "You'll work alongside a skilled team of Senior Engineers across five countries participating in system design, architecture, maintenance, and refactoring decisions. You'll be working on new features and integrations and be active in code reviews and coordinating engineering efforts across teams and products.",
        "items": [
          "Administering and configuring software", 
          "Identify opportunity and help to implement a monitoring solution for proactive and predictable operations.", 
          "Triaging problems with applications - identifying known errors and problem trends and finding permanent solutions through root cause analysis.",
          "Providing level 2 and 3 application support."
        ]
      }
    }
    await api.post('/api/jobs/create')
    .send(newJob)
    .expect(400)
  
    const response =  await api.get('/api/jobs')
    expect(response.body).toHaveLength(initialJobs.length + 1)
  })
})

//delete a job



//update a job


afterAll(() => {
  mongoose.connection.close()
})