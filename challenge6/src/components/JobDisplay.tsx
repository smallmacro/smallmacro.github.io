import React from 'react'
import JobInfo from './JobInfo'

const JobDisplay = () => {

  const jobs = [
    {
      "id": 1,
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
      "id": 2,
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
  ]
  
  return (
    <div className='grid grid-cols-1 mt-[57px] mb-8 gap-y-[49px] md:mb-14 md:grid-cols-2 md:gap-y-[65px] md:gap-x-[11px] md:mt-[70px] xl:grid-cols-3 xl:mt-[105px] xl:gap-x-[30px]'>
      <JobInfo />
      <JobInfo />
      <JobInfo />
    </div>
  )
}

export default JobDisplay