import { PrismaPostsRepository } from '@/repositories/prisma/prisma-posts-repository'
import { FetchUserPostsUseCase } from '../fetch-recent-posts-user-use-case'

export function makeFetchUserPostsUseCase() {
  const postsRepository = new PrismaPostsRepository()

  const useCase = new FetchUserPostsUseCase(postsRepository)

  return useCase
}
