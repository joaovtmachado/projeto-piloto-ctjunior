import { makeFetchRecentPostUseCase } from '@/use-cases/factories/make-fetch-recente-posts-use-case'
import { FastifyRequest, FastifyReply } from 'fastify'

export async function fetchRecentPosts(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const fetchRecentPostUseCase = makeFetchRecentPostUseCase()

  const { posts } = await fetchRecentPostUseCase.execute({})

  return reply.status(200).send({
    posts,
  })
}
