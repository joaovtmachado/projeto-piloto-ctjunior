import { PrismaPostsRepository } from '@/repositories/prisma/prisma-posts-repository'
import { FetchRecentPostsUseCase } from '../fetch-recent-posts-use-case'

export function makeFetchRecentPostUseCase() {
  const userRepository = new PrismaPostsRepository()
  const registerUseCase = new FetchRecentPostsUseCase(userRepository)

  return registerUseCase
}
