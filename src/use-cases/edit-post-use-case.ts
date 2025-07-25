import { PostsRepository } from '../repositories/posts-repository'
import { Post } from '@prisma/client'
import { ResourceNotFoundError } from './errors/resource-not-found-error'
import { UnauthorizedError } from './errors/unauthorized-error'

interface EditPostUseCaseRequest {
  postId: string
  userId: string
  description: string
}

interface EditPostUseCaseResponse {
  post: Post
}

export class EditPostUseCase {
  // eslint-disable-next-line prettier/prettier
  constructor(private postsRepository: PostsRepository) {}

  async execute({
    postId,
    userId,
    description,
  }: EditPostUseCaseRequest): Promise<EditPostUseCaseResponse> {
    const post = await this.postsRepository.findById(postId)

    if (!post) {
      throw new ResourceNotFoundError()
    }

    if (post.user_id !== userId) {
      throw new UnauthorizedError()
    }

    post.description = description

    await this.postsRepository.save(post)

    return {
      post,
    }
  }
}
