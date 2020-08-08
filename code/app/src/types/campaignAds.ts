import { ImageAds, VideoAds } from './ads'

export interface CampaignAds {
  id: number
  name: string
  ads: Array<ImageAds | VideoAds>
}

export interface ShowingCampaignAds {
  campaignAdsList: CampaignAds[]
  queryDate?: number
}
