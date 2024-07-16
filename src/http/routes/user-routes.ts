import { register } from '@/http/controllers/register'
import { FastifyInstance } from 'fastify'
import { authenticate } from '../controllers/authenticate'
import { profile } from '../controllers/profile'
import { verifyJWT } from '../middlewares/verify-jwt'

export async function userRoutes(app: FastifyInstance) {
  app.post('/users', register)
  app.post('/sessions', authenticate)

  // Authenticated
  app.get('/me', { onRequest: [verifyJWT] }, profile)
}
