import { PrismaPostsRepository } from '@/repositories/prisma/prisma-posts-repository'
import { FetchUserPostsUseCase } from '../fetch-recent-posts-user-use-case'
import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'

export function makeFetchUserPostsUseCase() {
  const postsRepository = new PrismaPostsRepository()
  const usersRepository = new PrismaUsersRepository()
  const useCase = new FetchUserPostsUseCase(postsRepository, usersRepository)

  return useCase
}
