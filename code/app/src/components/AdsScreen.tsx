import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { ShowingCampaignAdsContext } from 'contexts/ShowingCampaignAds'
import BackendApis from 'utils/BackendApis'
import { ShowingCampaignAds } from 'types/campaignAds'

import Loading from './Loading'
import CampaignAdsList from './CampaignAdsList'
import NotFound from './NotFound'

export default function AdsScreen() {
  const { kiosTag } = useParams()

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

  const isNotFound =
    showingCampaignAdsContext.state?.showingCampaignAds &&
    showingCampaignAdsContext.state.showingCampaignAds.campaignAdsList &&
    showingCampaignAdsContext.state.showingCampaignAds.campaignAdsList
      .length === 0

  const isShowLoadingComponent =
    (!showingCampaignAdsContext.state?.showingCampaignAds ||
      !showingCampaignAdsContext.state.showingCampaignAds.campaignAdsList) &&
    isNotFound !== true

  return (
    <div>
      {isShowLoadingComponent === true && <Loading />}
      {isNotFound === true && <NotFound />}
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
