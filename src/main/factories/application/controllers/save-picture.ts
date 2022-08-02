import { SavePictureController } from '@/application/controllers'
import { makeChangeProfilePicture } from '@/main/factories/domain/useCases'

export const makeSavePictureController = (): SavePictureController => {
  return new SavePictureController(makeChangeProfilePicture())
}
