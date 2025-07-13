import { makeCreatePostsUseCase } from '@/use-cases/factories/make-create-posts-use-case'
import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'

export async function createPost(request: FastifyRequest, reply: FastifyReply) {
  const createPostSchema = z.object({
    description: z.string().nullable(),
    photo_link: z.string().url(),
  })

  const { description, photo_link } = createPostSchema.parse(request.body)

  const createPostUseCase = makeCreatePostsUseCase()

  await createPostUseCase.execute({
    description,
    photo_link,
    userId: request.user.sub,
  })

  return reply.status(201).send()
}
