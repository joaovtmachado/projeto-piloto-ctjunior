import { PostsRepository } from '@/repositories/posts-repository'
import { Post } from '@prisma/client'

interface FetchUserPostsUseCaseRequest {
  userId: string
}

interface FetchUserPostsUseCaseResponse {
  posts: Post[]
}

export class FetchUserPostsUseCase {
  constructor(private postsRepository: PostsRepository) {}

  async execute({
    userId,
  }: FetchUserPostsUseCaseRequest): Promise<FetchUserPostsUseCaseResponse> {
    const posts = await this.postsRepository.findManyByUserId(userId)

    return {
      posts,
    }
  }
}
