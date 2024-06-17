import { beforeEach, describe, expect, it } from 'vitest'
import { CreateGymUseCase } from '@/use-cases/create-gym'
import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-repository'

let gymsRepository: InMemoryGymsRepository
let sut: CreateGymUseCase

describe('Create Gym Use Case', () => {
  beforeEach(() => {
    gymsRepository = new InMemoryGymsRepository()
    sut = new CreateGymUseCase(gymsRepository)
  })

  it('should be able to create gym', async () => {
    const { gym } = await sut.execute({
      title: 'Academia Teste',
      description: 'Academia de teste',
      phone: '123456789',
      latitude: -15.6081661,
      longitude: -56.0807557,
    })

    expect(gym.id).toEqual(expect.any(String))
  })
})
