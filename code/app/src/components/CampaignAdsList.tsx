import React, { useState, useEffect } from 'react'
import shuffle from 'lodash/shuffle'
import { ShowingCampaignAds, CampaignAds } from 'types/campaignAds'
import AdsDisplay from './AdsDisplayList'

interface CampaignAdsListProps {
  showingCampaignAds?: ShowingCampaignAds | null
}

export default function CampaignAdsList({
  showingCampaignAds,
}: CampaignAdsListProps) {
  const [campaignAdsList, setCampaignAdsList] = useState<CampaignAds[]>(
    shuffle(showingCampaignAds?.campaignAdsList || []),
  )

  useEffect(
    function reInitialCampaignAdsList() {
      if (!showingCampaignAds?.campaignAdsList) return

      setCampaignAdsList(shuffle(showingCampaignAds.campaignAdsList))
    },
    [showingCampaignAds],
  )

  const [campaignAds] = campaignAdsList

  return (
    <>
      {campaignAds && campaignAds.adsList && (
        <AdsDisplay adsList={campaignAds.adsList} />
      )}
    </>
  )
}
