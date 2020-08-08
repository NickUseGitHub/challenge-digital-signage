import { ImageAds, VideoAds } from './ads'

export interface CampaignAds {
  id: string
  name: string
  ads: Array<ImageAds | VideoAds>
}

export interface ShowingCampaignAds {
  campaignAdsList: CampaignAds[]
  dateEnding?: Date
}
