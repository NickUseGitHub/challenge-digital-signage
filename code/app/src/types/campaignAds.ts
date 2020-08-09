import { ImageAds, VideoAds } from './ads'

export interface CampaignAds {
  id: number
  name: string
  adsList: Array<ImageAds | VideoAds>
}

export interface ShowingCampaignAds {
  campaignAdsList: CampaignAds[]
  queryDate: number
}
