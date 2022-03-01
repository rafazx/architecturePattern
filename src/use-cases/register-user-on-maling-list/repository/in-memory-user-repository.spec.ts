import { UserData } from '../user-data'
import { InMemoryUserRepository } from './in-memory-user-repository'

describe('In memory User repository', () => {
  test('should return null if user not found', async () => {
    const users: UserData[] = []
    const email = 'any@email.com'
    const userRepo = new InMemoryUserRepository(users)
    const user = await userRepo.findUserByEmail(email)
    expect(user).toBeNull()
  })
})
