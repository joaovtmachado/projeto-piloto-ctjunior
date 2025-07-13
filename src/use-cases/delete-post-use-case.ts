import { PostsRepository } from '@/repositories/posts-repository'
import { ResourceNotFoundError } from './errors/resource-not-found-error'
import { UnauthorizedError } from './errors/unauthorized-error'

interface DeletePostUseCaseRequest {
  postId: string
  userId: string
}
export class DeletePostUseCase {
  constructor(private postsRepository: PostsRepository) {}

  async execute({ postId, userId }: DeletePostUseCaseRequest): Promise<void> {
    const post = await this.postsRepository.findById(postId)

    if (!post) {
      throw new ResourceNotFoundError()
    }
    if (post.user_id !== userId) {
      throw new UnauthorizedError()
    }
    await this.postsRepository.delete(postId)
  }
}
