import { DeletePictureController } from '@/application/controllers'
import { makeChangeProfilePicture } from '@/main/factories/domain/useCases'

export const makeDeletePictureController = (): DeletePictureController => {
  return new DeletePictureController(makeChangeProfilePicture())
}
