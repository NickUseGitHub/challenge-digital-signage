import React from 'react'
import AdsScreen from 'components/AdsScreen'
import ShowingCampaignAdsProvider from 'contexts/ShowingCampaignAds'

function App() {
  return (
    <ShowingCampaignAdsProvider>
      <AdsScreen />
    </ShowingCampaignAdsProvider>
  )
}

export default App
