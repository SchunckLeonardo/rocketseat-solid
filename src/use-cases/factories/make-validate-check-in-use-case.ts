import { PrismaCheckInsRepository } from '@/repositories/prisma/prisma-checkins-repository'
import { ValidateCheckInUseCase } from '../validate-check-in'

export function makeValidateCheckInCase() {
  const prismaCheckInsRepository = new PrismaCheckInsRepository()
  const useCase = new ValidateCheckInUseCase(prismaCheckInsRepository)

  return useCase
}
