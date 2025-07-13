import { makeDeletePostsUseCase } from '@/use-cases/factories/make-delete-post-use-case'
import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'

export async function deletePost(request: FastifyRequest, reply: FastifyReply) {
  const deletePostParamsSchema = z.object({
    postId: z.string().uuid(),
  })

  const { postId } = deletePostParamsSchema.parse(request.params)

  const deletePostUseCase = makeDeletePostsUseCase()

  await deletePostUseCase.execute({
    postId,
    userId: request.user.sub,
  })

  return reply.status(204).send()
}
