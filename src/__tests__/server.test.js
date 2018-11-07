import request from 'supertest'
import { createServer } from '../server'

describe('Server Side Rendering', () => {
  describe('/', () => {
    it('displays a hello world message', async () => {
      let response = await request(createServer()).get('/')

      expect(response.text).toMatch(/Hello world/)
    })
  })
  describe('/about', () => {
    it('it displays an about message', async () => {
      let response = await request(createServer()).get('/about')

      expect(response.text).toMatch(/About/)
    })
  })
})

