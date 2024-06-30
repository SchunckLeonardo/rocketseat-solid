import { register } from '@/http/controllers/register'
import { FastifyInstance } from 'fastify'

export async function userRoutes(app: FastifyInstance) {
  app.post('/', register)
}
