import React, { useState, useEffect } from 'react'
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

  useEffect(
    function shuffleCampaignAdsList() {
      if (!showingCampaignAds?.campaignAdsList) return

      setCampaignAdsList(shuffle(showingCampaignAds.campaignAdsList))
    },
    [showingCampaignAds],
  )

  const [campaignAds] = campaignAdsList

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
              return eachCampaignAds.id !== campaignAds.id
            })
            .concat(campaignAds), // play new loop
    )
  }

  return (
    <>
      {campaignAds && campaignAds.adsList && (
        <AdsDisplay
          key={`${campaignAds.name}_${new Date().getTime()}`}
          adsList={campaignAds.adsList}
          onAdsAlmostPlayFinish={onAdsAlmostPlayFinish}
          onAllAdsFinishPlay={onAllAdsFinishPlay}
        />
      )}
    </>
  )
}
