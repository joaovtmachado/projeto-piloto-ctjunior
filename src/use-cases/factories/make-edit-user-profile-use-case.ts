import { EditUserProfileUseCase } from '../edit-user-profile-use-case'
import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'

export function makeEditUsersUseCase() {
  const userRepository = new PrismaUsersRepository()
  const registerUseCase = new EditUserProfileUseCase(userRepository)

  return registerUseCase
}
