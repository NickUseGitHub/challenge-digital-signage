import { ImageAds, VideoAds } from './ads'

export interface CampaignAds {
  id: string
  name: string
  ads: ImageAds | VideoAds
}

export interface ShowingCampaignAds {
  campaignAdsList: CampaignAds[]
  dateEnding?: Date
}
