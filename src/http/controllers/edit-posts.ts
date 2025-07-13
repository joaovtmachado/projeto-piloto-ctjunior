import { makeEditPostsUseCase } from '@/use-cases/factories/make-edit-post-use-case'
import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'

export async function editPost(request: FastifyRequest, reply: FastifyReply) {
  const editPostParamsSchema = z.object({
    postId: z.string().uuid(),
  })

  const editPostBodySchema = z.object({
    description: z.string(),
  })

  const { postId } = editPostParamsSchema.parse(request.params)
  const { description } = editPostBodySchema.parse(request.body)

  const editPostUseCase = makeEditPostsUseCase()

  await editPostUseCase.execute({
    postId,
    description,
    userId: request.user.sub,
  })

  return reply.status(204).send()
}
