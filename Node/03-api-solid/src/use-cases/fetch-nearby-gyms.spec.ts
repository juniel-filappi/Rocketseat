import { beforeEach, describe, expect, it } from 'vitest'
import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-repository'
import { FetchNearbyGymsUseCase } from '@/use-cases/fetch-nearby-gyms'

let gymsRepository: InMemoryGymsRepository
let sut: FetchNearbyGymsUseCase

describe('Fetch Nearby Gyms Use Case', () => {
  beforeEach(async () => {
    gymsRepository = new InMemoryGymsRepository()
    sut = new FetchNearbyGymsUseCase(gymsRepository)
  })

  it('should be able to fetch nearby gyms', async () => {
    await gymsRepository.create({
      title: 'Near Gym',
      description: 'Academia de teste',
      phone: '123456789',
      latitude: -15.6081661,
      longitude: -56.0807557,
    })

    await gymsRepository.create({
      title: 'Far Gym',
      description: 'Academia de teste',
      phone: '123456789',
      latitude: -15.4714898,
      longitude: -55.7388262,
    })

    const { gyms } = await sut.execute({
      userLatitude: -15.6081661,
      userLongitude: -56.0807557,
    })

    expect(gyms).toHaveLength(1)
    expect(gyms).toEqual([expect.objectContaining({ title: 'Near Gym' })])
  })
})
