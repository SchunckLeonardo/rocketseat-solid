import { UsersRepository } from '@/repositories/users-repository'
import { beforeEach, describe, expect, it } from 'vitest'
import { GetUserProfileUseCase } from './get-user-profile'
import { InMemoryUserRepository } from '@/repositories/in-memory/in-memory-user-repository'
import { hash } from 'bcryptjs'
import { ResourceNotFoundError } from './errors/resource-not-found-error'

let usersRepository: UsersRepository
let sut: GetUserProfileUseCase

describe('Get User Profile Use Case', () => {
  beforeEach(() => {
    usersRepository = new InMemoryUserRepository()
    sut = new GetUserProfileUseCase(usersRepository)
  })

  it('should be able to get user profile', async () => {
    const createdUser = await usersRepository.create({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password_hash: await hash('123456', 6),
    })

    const { user } = await sut.execute({ userId: createdUser.id })

    expect(user.id).toEqual(expect.any(String))
  })

  it('should not be able to get user profile with wrong id', async () => {
    expect(() =>
      sut.execute({ userId: 'non-existing-id' }),
    ).rejects.toBeInstanceOf(ResourceNotFoundError)
  })
})
