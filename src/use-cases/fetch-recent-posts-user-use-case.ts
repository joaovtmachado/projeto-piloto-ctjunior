import { PostsRepository } from '@/repositories/posts-repository'
import { UsersRepository } from '@/repositories/users-repository'
import { Post } from '@prisma/client'
import { ResourceNotFoundError } from './errors/resource-not-found-error'

interface FetchUserPostsUseCaseRequest {
  userId: string
}

interface FetchUserPostsUseCaseResponse {
  name: string
  profile_photo: string | null
  posts: Post[]
}

export class FetchUserPostsUseCase {
  constructor(
    private postsRepository: PostsRepository,
    private usersRepository: UsersRepository,
  ) {}

  async execute({
    userId,
  }: FetchUserPostsUseCaseRequest): Promise<FetchUserPostsUseCaseResponse> {
    const user = await this.usersRepository.findById(userId)

    if (!user) {
      throw new ResourceNotFoundError()
    }

    const posts = await this.postsRepository.findManyByUserId(userId)

    return {
      name: user.name,
      profile_photo: user.profile_photo,
      posts,
    }
  }
}
