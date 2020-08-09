import React, { useContext, useEffect } from 'react'

import { ShowingCampaignAdsContext } from 'contexts/ShowingCampaignAds'
import BackendApis from 'utils/BackendApis'
import { ShowingCampaignAds } from 'types/campaignAds'

import Loading from './Loading'
import CampaignAdsList from './CampaignAdsList'

export default function AdsScreen() {
  const kiosTag = 'K03'
  const showingCampaignAdsContext = useContext(ShowingCampaignAdsContext)
  const initialShowingCampaignAdsFromApi = () => {
    BackendApis.getShowingCampaignAds(
      kiosTag,
    ).then((showingCampaignAds: ShowingCampaignAds) =>
      showingCampaignAdsContext.actions.setShowingCampaignAds(
        showingCampaignAds,
      ),
    )
  }

  useEffect(initialShowingCampaignAdsFromApi, [])

  const isShowLoadingComponent = !showingCampaignAdsContext.state
    ?.showingCampaignAds

  return (
    <div>
      {isShowLoadingComponent === true && <Loading />}
      {showingCampaignAdsContext.state?.showingCampaignAds && (
        <CampaignAdsList
          initialShowingCampaignAdsFromApi={initialShowingCampaignAdsFromApi}
          showingCampaignAds={
            showingCampaignAdsContext.state.showingCampaignAds
          }
        />
      )}
    </div>
  )
}
