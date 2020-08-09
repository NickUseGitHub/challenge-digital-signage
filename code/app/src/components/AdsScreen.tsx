import React, { useContext, useState, useEffect } from 'react'

import { ShowingCampaignAdsContext } from 'contexts/ShowingCampaignAds'
import BackendApis from 'utils/BackendApis'
import { ShowingCampaignAds } from 'types/campaignAds'

import Loading from './Loading'

export default function AdsScreen() {
  const kiosTag = 'K03'
  const showingCampaignAdsContext = useContext(ShowingCampaignAdsContext)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const initialShowingCampaignAds = () => {
    setIsLoading(true)
    BackendApis.getShowingCampaignAds(kiosTag)
      .then((showingCampaignAds: ShowingCampaignAds) =>
        showingCampaignAdsContext.actions.setShowingCampaignAds(
          showingCampaignAds,
        ),
      )
      .finally(() => setIsLoading(false))
  }

  useEffect(initialShowingCampaignAds, [])

  const isShowLoadingComponent =
    isLoading || !showingCampaignAdsContext.state?.showingCampaignAds

  return <div>{isShowLoadingComponent && <Loading />}</div>
}
