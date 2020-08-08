import flow from 'lodash/flow'
// import { CampaignAds as FrontCampaignAds } from '@app/types/campaignAds'
import { CampaignAds } from './types'
import { campaignAdsList } from './seeds'

function getCampaignAdsListFromKiosTag(kiosTag: string): CampaignAds[] {
  return campaignAdsList.filter(function filterByKiosTag(campaignAds) {
    return (campaignAds.kiosTags || []).indexOf(kiosTag) !== -1
  })
}

export function getCampaignAdsList(kiosTag: string) {
  return flow([getCampaignAdsListFromKiosTag])(kiosTag)
}
