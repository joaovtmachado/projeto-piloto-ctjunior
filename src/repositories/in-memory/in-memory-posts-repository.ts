import { Post, Prisma } from '@prisma/client'
import { PostsRepository } from '../posts-repository'
import { randomUUID } from 'node:crypto'

export class InMemoryPostsRepository implements PostsRepository {
  public items: Post[] = []

  async create(data: Prisma.PostUncheckedCreateInput) {
    const post = {
      id: data.id ?? randomUUID(),
      created_at: new Date(),
      photo_link: data.photo_link,
      description: data.description ?? null,
      user_id: data.user_id,
    }
    this.items.push(post)
    return post
  }

  async findMany() {
    return this.items.sort(
      (a, b) => b.created_at.getTime() - a.created_at.getTime(),
    )
  }

  async findManyByUserId(userId: string) {
    return this.items
      .filter((item) => item.user_id === userId)
      .sort((a, b) => b.created_at.getTime() - a.created_at.getTime())
  }
}
