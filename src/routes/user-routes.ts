import { prisma } from '@/lib/prisma'
import { FastifyInstance } from 'fastify'
import { z } from 'zod'

export async function userRoutes(app: FastifyInstance) {
  app.post('/', async (req, res) => {
    const registerBodySchema = z.object({
      name: z.string(),
      email: z.string().email(),
      password: z.string().min(6),
    })

    const { email, name, password } = registerBodySchema.parse(req.body)

    await prisma.user.create({
      data: {
        name,
        email,
        password_hash: password,
      },
    })

    return res.status(201).send()
  })
}
