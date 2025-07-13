import { makeFetchUserPostsUseCase } from '@/use-cases/factories/make-fetch-recente-posts-user-use-case'
import { FastifyRequest, FastifyReply } from 'fastify'

export async function fetchUserPosts(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const fetchUserPostsUseCase = makeFetchUserPostsUseCase()

  const { posts } = await fetchUserPostsUseCase.execute({
    userId: request.user.sub,
  })

  return reply.status(200).send({
    posts,
  })
}
