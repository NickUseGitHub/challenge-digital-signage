import React, { useState } from 'react'
import Loading from 'components/Loading'
import { ShowingCampaignAds } from 'types/campaignAds'

function App() {
  const [showingCampaignAds, setShowingCampaignAds] = useState<
    ShowingCampaignAds
  >({
    campaignAdsList: [],
  })

  const isLoading =
    !showingCampaignAds ||
    !showingCampaignAds.campaignAdsList ||
    showingCampaignAds.campaignAdsList.length === 0

  return <div>{isLoading && <Loading />}</div>
}

export default App
