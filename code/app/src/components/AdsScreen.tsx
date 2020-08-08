import React, { useContext } from 'react'
import { ShowingCampaignAdsContext } from 'contexts/ShowingCampaignAds'

import Loading from './Loading'

export default function AdsScreen() {
  const showingCampaignAdsContext = useContext(ShowingCampaignAdsContext)

  const isLoading = !showingCampaignAdsContext.state?.showingCampaignAds

  return <div>{isLoading && <Loading />}</div>
}
