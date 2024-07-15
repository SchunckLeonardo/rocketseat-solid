import { FastifyReply, FastifyRequest } from 'fastify'

export function profile(req: FastifyRequest, res: FastifyReply) {
  return res.status(200).send()
}
