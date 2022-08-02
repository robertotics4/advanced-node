import { ChangeProfilePicture, setupChangeProfilePicture } from '@/domain/useCases'
import { makeAwsS3FileStorage, makeUniqueId } from '../../infra/gateways'
import { makePgUserProfileRepo } from '../../infra/repos'

export const makeChangeProfilePicture = (): ChangeProfilePicture => {
  return setupChangeProfilePicture(
    makeAwsS3FileStorage(),
    makeUniqueId(),
    makePgUserProfileRepo()
  )
}
