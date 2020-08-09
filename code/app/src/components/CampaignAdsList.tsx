import React, { useState } from 'react'
import shuffle from 'lodash/shuffle'
import { ShowingCampaignAds, CampaignAds } from 'types/campaignAds'
import AdsDisplay from './AdsDisplayList'

interface CampaignAdsListProps {
  initialShowingCampaignAdsFromApi: () => void
  showingCampaignAds?: ShowingCampaignAds | null
}

export default function CampaignAdsList({
  initialShowingCampaignAdsFromApi,
  showingCampaignAds,
}: CampaignAdsListProps) {
  const [campaignAdsList, setCampaignAdsList] = useState<CampaignAds[]>(
    shuffle(showingCampaignAds?.campaignAdsList || []),
  )
  const [alreadyShuffledCampaignAds] = campaignAdsList

  const onAdsAlmostPlayFinish = () => {
    const queryDate = showingCampaignAds?.queryDate
    const currentTimestamp = new Date().getTime()

    if (!queryDate || currentTimestamp < queryDate) return

    initialShowingCampaignAdsFromApi()
  }

  const onAllAdsFinishPlay = () => {
    const [, ...newCampaignAdsList] = campaignAdsList

    setCampaignAdsList(
      newCampaignAdsList && newCampaignAdsList.length > 0
        ? newCampaignAdsList // remove played campaignAdsList
        : (showingCampaignAds?.campaignAdsList || [])
            .filter(function filterLastCampaignAdsToPreventShowAtFirst(
              eachCampaignAds,
            ) {
              return eachCampaignAds.id !== alreadyShuffledCampaignAds.id
            })
            .concat(alreadyShuffledCampaignAds), // play new loop
    )
  }

  return (
    <>
      {alreadyShuffledCampaignAds && alreadyShuffledCampaignAds.adsList && (
        <AdsDisplay
          key={`${alreadyShuffledCampaignAds.name}_${new Date().getTime()}`}
          adsList={alreadyShuffledCampaignAds.adsList}
          onAdsAlmostPlayFinish={onAdsAlmostPlayFinish}
          onAllAdsFinishPlay={onAllAdsFinishPlay}
        />
      )}
    </>
  )
}
