import { PrismaPostsRepository } from '@/repositories/prisma/prisma-posts-repository'
import { DeletePostUseCase } from '../delete-post-use-case'

export function makeDeletePostsUseCase() {
  const userRepository = new PrismaPostsRepository()
  const registerUseCase = new DeletePostUseCase(userRepository)

  return registerUseCase
}
