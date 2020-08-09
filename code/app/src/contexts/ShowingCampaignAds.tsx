import React, { createContext, useState } from 'react'
import { ShowingCampaignAds } from 'types/campaignAds'

interface ShowingCampaignState {
  showingCampaignAds: ShowingCampaignAds | null
}

interface ShowingCampaignAdsContextType {
  state: ShowingCampaignState
  actions: {
    setShowingCampaignAds: (showingCampaignAds: ShowingCampaignAds) => void
  }
}

const initiatedShowingCampaignAdsContext: ShowingCampaignAdsContextType = {
  state: {
    showingCampaignAds: null,
  },
  actions: {
    setShowingCampaignAds: () => {},
  },
}

export const ShowingCampaignAdsContext = createContext<
  ShowingCampaignAdsContextType
>(initiatedShowingCampaignAdsContext)

interface CampaignProviderProps {
  children: any
}

export default function ShowingCampaignAdsProvider({
  children,
}: CampaignProviderProps) {
  const [showingCampaignState, setShowingCampaignState] = useState<
    ShowingCampaignState
  >({
    showingCampaignAds: null,
  })

  const showingCampaignAdsContextValue: ShowingCampaignAdsContextType = {
    state: showingCampaignState,
    actions: {
      setShowingCampaignAds(showingCampaignAds: ShowingCampaignAds) {
        setShowingCampaignState({
          ...showingCampaignState,
          showingCampaignAds,
        })
      },
    },
  }

  return (
    <ShowingCampaignAdsContext.Provider value={showingCampaignAdsContextValue}>
      {children}
    </ShowingCampaignAdsContext.Provider>
  )
}
