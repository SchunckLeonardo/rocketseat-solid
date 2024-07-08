import fastify from 'fastify'
import { userRoutes } from './http/routes/user-routes'
import { ZodError } from 'zod'
import { env } from './env'

export const app = fastify()

app.register(userRoutes)

app.setErrorHandler((error, _, res) => {
  if (error instanceof ZodError) {
    return res
      .status(400)
      .send({ message: 'Validation error', issues: error.format() })
  }

  if (env.NODE_ENV !== 'production') {
    console.error(error)
  }

  return res.status(500).send({ message: 'Internal server error.' })
})
