import { Post, Prisma } from '@prisma/client'

export interface PostsRepository {
  create(data: Prisma.PostUncheckedCreateInput): Promise<Post>

  findById(id: string): Promise<Post | null>

  findManyRecent(): Promise<Post[]>

  findManyByUserId(userId: string): Promise<Post[]>

  save(data: Post): Promise<Post>

  delete(id: string): Promise<void>
}
