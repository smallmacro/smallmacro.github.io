const User = require('../models/User')
const mongoose = require('mongoose')
const bcrypt= require('bcrypt')
const app = require('../app')
const supertest = require('supertest')
const api = supertest(app)


describe('when there is initially one user in db', () => { 
  beforeAll(async () => {
    await User.deleteMany({})
    const passwordHash = await bcrypt.hash('sekrets', 10)
    const user = new User({
      username: 'root',
      passwordHash,
      email:'admin@testthisweb.com',
      role: 'admin'
    })
    
    await user.save()
  })
  
  test('should creation succeeds with a fresh usename',async () => { 
    const response = await api.get('/api/users')
    const usersAtStart = response.body;

    const newUser = {
      username: 'tarandomname',
      email: 'randomtestemail@shski.com',
      password: 'itsarandompsd'
    }
    await api.post('/api/users/new')
      .send(newUser)
      .expect(201)
      .expect('Content-Type', /application\/json/)

    const afterRes = await api.get('/api/users')
    const usersAtEnd = afterRes.body
    expect(usersAtEnd).toHaveLength(usersAtStart.length + 1)

    const usernames = usersAtEnd.map(u => u.username)
    expect(usernames).toContain(newUser.username)

    })

    test('should creation fails with proper status code and message if username already take',async () => { 
      const response = await api.get('/api/users')
      const usersAtStart = response.body

      const newUser = {
        username: 'root',
        email: 'sdkdjh@sjkcl.com',
        password: 'asalinen'
      }
      const result = await api.post('/api/users/new')
        .send(newUser)
        .expect(400)
        .expect('Content-type', /application\/json/)
      expect(result.body.error).toContain('username must be unique')
      const afterRes = await api.get('/api/users')
      const usersAtEnd = afterRes.body
      expect(usersAtEnd).toEqual(usersAtStart)
    })

    afterAll(() => {
      mongoose.connection.close()
    })

})


