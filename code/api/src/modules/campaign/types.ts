import { CampaignAds as FrontCampaignAds } from '@app/types/campaignAds'

export interface Schedule {
  startTime: number
  endTime: number
}

export interface CampaignAds extends FrontCampaignAds {
  kiosTags: string[]
  dateRanges: Schedule[]
  timeRanges?: Schedule[]
}
