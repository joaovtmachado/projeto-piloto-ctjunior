import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'
import { makeEditUsersUseCase } from '@/use-cases/factories/make-edit-user-profile-use-case'
import { ResourceNotFoundError } from '@/use-cases/errors/resource-not-found-error'

export async function editProfile(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const editProfileBodySchema = z.object({
    photo_link: z.string().url(),
  })

  const { photo_link } = editProfileBodySchema.parse(request.body)

  try {
    const editUserProfileUseCase = makeEditUsersUseCase()

    await editUserProfileUseCase.execute({
      userId: request.user.sub,
      photoLink: photo_link,
    })
  } catch (err) {
    if (err instanceof ResourceNotFoundError) {
      return reply.status(404).send({ message: err.message })
    }
    throw err
  }

  return reply.status(204).send()
}
