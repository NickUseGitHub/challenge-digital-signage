import React, { useContext, useEffect } from 'react'

import { ShowingCampaignAdsContext } from 'contexts/ShowingCampaignAds'
import BackendApis from 'utils/BackendApis'
import { ShowingCampaignAds } from 'types/campaignAds'

import Loading from './Loading'
import CampaignAdsList from './CampaignAdsList'

export default function AdsScreen() {
  const kiosTag = 'K03'
  const showingCampaignAdsContext = useContext(ShowingCampaignAdsContext)
  const initialShowingCampaignAds = () => {
    BackendApis.getShowingCampaignAds(
      kiosTag,
    ).then((showingCampaignAds: ShowingCampaignAds) =>
      showingCampaignAdsContext.actions.setShowingCampaignAds(
        showingCampaignAds,
      ),
    )
  }

  useEffect(initialShowingCampaignAds, [])

  const isShowLoadingComponent = !showingCampaignAdsContext.state
    ?.showingCampaignAds

  return (
    <div>
      {isShowLoadingComponent === true && <Loading />}
      {showingCampaignAdsContext.state?.showingCampaignAds && (
        <CampaignAdsList
          showingCampaignAds={
            showingCampaignAdsContext.state.showingCampaignAds
          }
        />
      )}
    </div>
  )
}
