import { CheckInUseCase } from '../check-in'
import { PrismaGymsRepository } from '@/repositories/prisma/prisma-gyms-repository'
import { PrismaCheckInsRepository } from '@/repositories/prisma/prisma-checkins-repository'

export function makeCheckInUseCase() {
  const prismaCheckInsRepository = new PrismaCheckInsRepository()
  const prismaGymsRepository = new PrismaGymsRepository()
  const useCase = new CheckInUseCase(
    prismaCheckInsRepository,
    prismaGymsRepository,
  )

  return useCase
}
