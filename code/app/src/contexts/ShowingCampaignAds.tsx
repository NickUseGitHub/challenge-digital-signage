import React, { createContext, useState } from 'react'
import shuffle from 'lodash/shuffle'
import { CampaignAds, ShowingCampaignAds } from 'types/campaignAds'

interface ShowingCampaignState {
  shownCampaignList: CampaignAds[]
  onHoldCampaignList: CampaignAds[]
  showingCampaignAds?: ShowingCampaignAds
}

interface ShowingCampaignAdsContextType {
  state: ShowingCampaignState | null
  actions: {
    randomCampaignAds: () => CampaignAds | null
    setCampaignAds: (showingCampaignAds: ShowingCampaignAds) => void
  }
}

const initiatedShowingCampaignAdsContext: ShowingCampaignAdsContextType = {
  state: null,
  actions: {
    randomCampaignAds: () => null,
    setCampaignAds: () => {},
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
    onHoldCampaignList: [],
    shownCampaignList: [],
  })

  const showingCampaignAdsContextValue: ShowingCampaignAdsContextType = {
    state: showingCampaignState,
    actions: {
      randomCampaignAds() {
        const {
          shownCampaignList,
          onHoldCampaignList,
          showingCampaignAds,
        } = showingCampaignState
        if (
          !showingCampaignAds ||
          !showingCampaignAds.campaignAdsList ||
          showingCampaignAds.campaignAdsList.length === 0
        )
          return null

        // start the whole ads again
        if (!onHoldCampaignList || onHoldCampaignList.length === 0) {
          const [
            shulffledCampaignAds,
            ...restCampaignList
          ] = showingCampaignAds.campaignAdsList

          setShowingCampaignState({
            ...showingCampaignState,
            onHoldCampaignList: restCampaignList,
            shownCampaignList: [shulffledCampaignAds],
          })

          return shulffledCampaignAds
        } else {
          const [shulffledCampaignAds, ...restCampaignList] = shuffle(
            onHoldCampaignList,
          )

          setShowingCampaignState({
            ...showingCampaignState,
            onHoldCampaignList: (restCampaignList || []).filter(
              (campaignAds) => !!campaignAds,
            ),
            shownCampaignList: [...shownCampaignList, shulffledCampaignAds],
          })

          return shulffledCampaignAds
        }
      },
      setCampaignAds(showingCampaignAds: ShowingCampaignAds) {
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
