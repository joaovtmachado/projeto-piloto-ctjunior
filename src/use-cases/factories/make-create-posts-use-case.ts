import { PrismaPostsRepository } from '@/repositories/prisma/prisma-posts-repository'
import { CreatePostUseCase } from '../create-posts-use-case'

export function makeCreatePostsUseCase() {
  const userRepository = new PrismaPostsRepository()
  const registerUseCase = new CreatePostUseCase(userRepository)

  return registerUseCase
}
