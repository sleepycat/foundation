import request from 'supertest'
import { server } from '../src/server'

describe('Server', () => {
  it('handles a basic request', async () => {
    let response = await request(server).get('/')

    expect(response.status).toEqual(404)
  })
})
