import { register } from '@/http/controllers/users/register'
import { FastifyInstance } from 'fastify'
import { authenticate } from '../controllers/users/authenticate'
import { profile } from '../controllers/users/profile'
import { verifyJWT } from '../middlewares/verify-jwt'
import { refresh } from '../controllers/users/refresh'

export async function userRoutes(app: FastifyInstance) {
  app.post('/users', register)
  app.post('/sessions', authenticate)

  app.patch('/token/refresh', refresh)

  // Authenticated
  app.get('/me', { onRequest: [verifyJWT] }, profile)
}
