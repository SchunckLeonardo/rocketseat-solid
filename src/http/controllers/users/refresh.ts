import { FastifyReply, FastifyRequest } from 'fastify'

export async function refresh(req: FastifyRequest, res: FastifyReply) {
  await req.jwtVerify({ onlyCookie: true })

  const { role } = req.user

  const token = await res.jwtSign(
    {
      role,
    },
    {
      sign: {
        sub: req.user.sub,
      },
    },
  )

  const refreshToken = await res.jwtSign(
    { role },
    {
      sign: {
        sub: req.user.sub,
      },
    },
  )

  return res.setCookie('refreshToken', refreshToken).status(200).send({ token })
}
