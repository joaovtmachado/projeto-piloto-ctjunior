import { PostsRepository } from '@/repositories/posts-repository'
import { Post } from '@prisma/client'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface FetchRecentPostsUseCaseRequest {}

interface FetchRecentPostsUseCaseResponse {
  posts: Post[]
}

export class FetchRecentPostsUseCase {
  constructor(private postsRepository: PostsRepository) {}

  // eslint-disable-next-line no-empty-pattern
  async execute({}: FetchRecentPostsUseCaseRequest): Promise<FetchRecentPostsUseCaseResponse> {
    const posts = await this.postsRepository.findManyRecent()

    return {
      posts,
    }
  }
}
