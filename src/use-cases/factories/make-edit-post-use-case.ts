import { PrismaPostsRepository } from '@/repositories/prisma/prisma-posts-repository'
import { EditPostUseCase } from '../edit-post-use-case'

export function makeEditPostsUseCase() {
  const userRepository = new PrismaPostsRepository()
  const registerUseCase = new EditPostUseCase(userRepository)

  return registerUseCase
}
