import { register } from '@/http/controllers/register'
import { FastifyInstance } from 'fastify'
import { authenticate } from '../controllers/authenticate'
import { profile } from '../controllers/profile'

export async function userRoutes(app: FastifyInstance) {
  app.post('/users', register)
  app.post('/sessions', authenticate)

  // Authenticated
  app.get('/me', profile)
}
