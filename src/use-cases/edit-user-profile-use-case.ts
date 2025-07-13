import { UsersRepository } from '@/repositories/users-repository'
import { User } from '@prisma/client'
import { ResourceNotFoundError } from './errors/resource-not-found-error'

interface EditUserProfileUseCaseRequest {
  userId: string
  photoLink: string
}
interface EditUserProfileUseCaseResponse {
  user: User
}

export class EditUserProfileUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute({
    userId,
    photoLink,
  }: EditUserProfileUseCaseRequest): Promise<EditUserProfileUseCaseResponse> {
    const user = await this.usersRepository.findById(userId)

    if (!user) {
      throw new ResourceNotFoundError()
    }

    user.profile_photo = photoLink

    await this.usersRepository.save(user)

    return {
      user,
    }
  }
}
