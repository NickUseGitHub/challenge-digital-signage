import { ImageAds, VideoAds } from './ads'

export interface CampAds {
  id: string
  name: string
  ads: ImageAds | VideoAds
}
