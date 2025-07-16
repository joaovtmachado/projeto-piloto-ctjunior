import { prisma } from '@/lib/prisma'
import { Post, Prisma } from '@prisma/client'
import { PostsRepository } from '../posts-repository'

export class PrismaPostsRepository implements PostsRepository {
  async create(data: Prisma.PostUncheckedCreateInput) {
    const post = await prisma.post.create({
      data,
    })
    return post
  }

  async findManyRecent() {
    const posts = await prisma.post.findMany({
      orderBy: {
        created_at: 'desc',
      },
      include: {
        user: {
          omit: {
            password_hash: true,
          },
        },
      },
    })

    return posts
  }

  async findManyByUserId(userId: string) {
    const posts = await prisma.post.findMany({
      where: {
        user_id: userId,
      },
      orderBy: {
        created_at: 'desc',
      },
    })
    return posts
  }

  async findById(id: string) {
    const post = await prisma.post.findUnique({
      where: {
        id,
      },
    })
    return post
  }

  async save(data: Post) {
    const post = await prisma.post.update({
      where: {
        id: data.id,
      },
      data,
    })

    return post
  }

  async delete(id: string): Promise<void> {
    await prisma.post.delete({
      where: {
        id,
      },
    })
  }
}
