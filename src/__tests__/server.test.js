import request from 'supertest'
import { server } from '../server'

describe('Server Side Rendering', () => {
  describe('/', () => {
    it('displays a hello world message', async () => {
      let response = await request(server).get('/')

      expect(response.text).toMatch(/Hello world/)
    })
  })

  describe('/about', () => {
    it('it displays an about message', async () => {
      let response = await request(server).get('/about')

      expect(response.text).toMatch(/About/)
    })
  })
})
