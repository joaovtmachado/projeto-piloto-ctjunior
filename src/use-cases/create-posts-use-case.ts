import { Post } from '@prisma/client'
import { PostsRepository } from '@/repositories/posts-repository'

interface PostUseCaseRequest {
  userId: string
  photo_link: string
  description: string | null
}

interface PostUseCaseResponse {
  post: Post
}

export class CreatePostUseCase {
  constructor(private postRepository: PostsRepository) {}

  async execute({
    photo_link,
    description,
    userId,
  }: PostUseCaseRequest): Promise<PostUseCaseResponse> {
    const post = await this.postRepository.create({
      photo_link,
      description,
      user_id: userId,
    })
    return { post }
  }
}
