import request from 'supertest'
import { server } from '../server'

describe('Server', () => {
  it('handles a basic request', async () => {
    let response = await request(server).get('/')

    expect(response.text).toMatch(/Hello world/)
  })
})
