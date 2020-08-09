import flow from 'lodash/flow'
import {
  ShowingCampaignAds,
  CampaignAds as FrontendCampaignAds,
} from '@app/types/campaignAds'
import { CampaignAds, Schedule } from './types'
import { campaignAdsList } from './seeds'
import { getTimestamp, isDateInRange } from '../../utils/dates'

function getCampaignAdsListFromKiosTag(kiosTag: string): CampaignAds[] {
  return campaignAdsList.filter(function filterByKiosTag(campaignAds) {
    return (campaignAds.kiosTags || []).indexOf(kiosTag) !== -1
  })
}

function filterCalculateDateToShowCampaignAds(
  filterBy: 'dateRanges' | 'timeRanges',
) {
  return function filterCampaignAds(
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
            isDateInRange(
              dateRange.startTime,
              dateRange.endTime,
              currentDateTimestamp,
            )
          )
        },
        false)
      },
    )
  }
}

function transformCampaignAdsListIntoShowingCampaignAds(
  campaignAdsList: CampaignAds[],
): ShowingCampaignAds {
  const currentDateTimestamp = getTimestamp(new Date())

  const scheduleList: Schedule[] = campaignAdsList.reduce(
    function getScheduleRangeTimeEachCampaign(prevScheduleList, campaignAds) {
      return [
        ...prevScheduleList,
        ...campaignAds.timeRanges.filter(function getOnlyScheduleComparedToNow(
          timeRange,
        ) {
          return isDateInRange(
            timeRange.startTime,
            timeRange.endTime,
            currentDateTimestamp,
          )
        },
        []),
      ]
    },
    [],
  )

  const minSchedule = Math.min(
    ...scheduleList.map((schedule) => schedule.endTime),
  )

  return {
    campaignAdsList: campaignAdsList.map(
      function transformToFrontendCampaignAds(
        campaignAds,
      ): FrontendCampaignAds {
        return {
          id: campaignAds.id,
          adsList: campaignAds.adsList,
          name: campaignAds.name,
        }
      },
    ),
    queryDate: minSchedule,
  }
}

export function getCampaignAdsList(kiosTag: string): ShowingCampaignAds {
  return flow([
    getCampaignAdsListFromKiosTag,
    filterCalculateDateToShowCampaignAds('dateRanges'),
    filterCalculateDateToShowCampaignAds('timeRanges'),
    transformCampaignAdsListIntoShowingCampaignAds,
  ])(kiosTag)
}
