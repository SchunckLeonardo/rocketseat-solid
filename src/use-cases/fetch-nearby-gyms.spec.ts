import { beforeEach, describe, expect, it } from 'vitest'
import { GymsRepository } from '@/repositories/gyms-repository'
import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-repository'
import { FetchNearbyGymsUseCase } from './fetch-nearby-gyms'

let gymsRepository: GymsRepository
let sut: FetchNearbyGymsUseCase

describe('Search Gyms Use Case', () => {
  beforeEach(async () => {
    gymsRepository = new InMemoryGymsRepository()
    sut = new FetchNearbyGymsUseCase(gymsRepository)
  })

  it('should be able to search for gyms', async () => {
    await gymsRepository.create({
      title: 'Near Gym',
      description: null,
      phone: null,
      latitude: -23.8303681,
      longitude: -46.8155989,
    })

    await gymsRepository.create({
      title: 'Far Gym',
      description: null,
      phone: null,
      // eslint-disable-next-line prettier/prettier
      latitude: -23.936000,
      longitude: -47.073831,
    })

    const { gyms } = await sut.execute({
      userLatitude: -23.8303681,
      userLongitude: -46.8155989,
    })

    expect(gyms).toHaveLength(1)
    expect(gyms).toEqual([expect.objectContaining({ title: 'Near Gym' })])
  })
})
