import { CampaignAds as FrontCampaignAds } from '@app/types/campaignAds'

interface Schedule {
  startTime: string
  endTime: string
}

export interface CampaignAds extends FrontCampaignAds {
  schedule: Schedule[]
}
