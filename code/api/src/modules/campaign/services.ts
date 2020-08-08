import flow from 'lodash/flow'
// import { CampaignAds as FrontCampaignAds } from '@app/types/campaignAds'
import { CampaignAds } from './types'
import { campaignAdsList } from './seeds'
import { getTimestamp } from '../../utils/dates'

function getCampaignAdsListFromKiosTag(kiosTag: string): CampaignAds[] {
  return campaignAdsList.filter(function filterByKiosTag(campaignAds) {
    return (campaignAds.kiosTags || []).indexOf(kiosTag) !== -1
  })
}

function filterCalculateDateToShowCampaignAds(
  filterBy: 'dateRanges' | 'timeRanges',
) {
  return function filterCampaignAdsBy(
    campaignAdsList: CampaignAds[],
  ): CampaignAds[] {
    const currentDateTimestamp = getTimestamp(new Date())

    return (campaignAdsList || []).filter(
      function getOnlyCampaingAdsIsNowShowing(campaignAds) {
        return (campaignAds[filterBy] || []).reduce(function isHasInDateRange(
          isNowPublishing,
          dateRange,
        ) {
          return (
            isNowPublishing ||
            (dateRange.startTime < currentDateTimestamp &&
              dateRange.endTime > currentDateTimestamp)
          )
        },
        false)
      },
    )
  }
}

export function getCampaignAdsList(kiosTag: string) {
  return flow([
    getCampaignAdsListFromKiosTag,
    filterCalculateDateToShowCampaignAds('dateRanges'),
    filterCalculateDateToShowCampaignAds('timeRanges'),
  ])(kiosTag)
}
