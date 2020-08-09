import React, { useState, useEffect } from 'react'
import { shuffle } from 'lodash'

import {
  AdType,
  VideoAds as VideoAdsType,
  ImageAds as ImageAdsType,
} from 'types/ads'
import ImageAds from './imageAds/ImageAds'
import VideoAds from './videoAds/VideoAds'

type AdsDisplayListType = Array<ImageAdsType | VideoAdsType>

interface AdsDisplayListProps {
  adsList: AdsDisplayListType
  onAllAdsFinishPlay: () => void
  onAdsAlmostPlayFinish?: () => void
}

export default function AdsDisplayList({
  adsList,
  onAllAdsFinishPlay,
  onAdsAlmostPlayFinish,
}: AdsDisplayListProps) {
  const [restAdsList, setRestAdsList] = useState<AdsDisplayListType>(adsList)
  const [ads] = shuffle(restAdsList)

  useEffect(
    function playAdsLoop() {
      if (!ads) {
        onAllAdsFinishPlay()
        return
      }

      const timeoutId = setTimeout(function whenAdFinishDisplay() {
        setRestAdsList(
          restAdsList.filter(function removeShownAds(eachAds) {
            return eachAds.id !== ads.id
          }),
        )
      }, ads.duration * 1000)

      return () => clearTimeout(timeoutId)
    },
    [ads, restAdsList],
  )

  useEffect(
    function beforeCurrentAdsFinishPlay() {
      if (!ads || typeof onAdsAlmostPlayFinish !== 'function') return

      const timeoutId = setTimeout(onAdsAlmostPlayFinish, ads.duration * 1000)
      return () => clearTimeout(timeoutId)
    },
    [ads, onAdsAlmostPlayFinish],
  )

  if (!ads) return null

  const imageAdsCondition: Omit<AdType, 'vdo'>[] = ['image', 'gif']
  const vdoAdsCondition: Omit<AdType, 'image' | 'gif'>[] = ['vdo']

  return (
    <>
      {ads && imageAdsCondition.indexOf(ads.type) !== -1 && (
        <ImageAds src={ads.srcUrl} />
      )}
      {ads && vdoAdsCondition.indexOf(ads.type) !== -1 && (
        <VideoAds autoPlay src={ads.srcUrl} />
      )}
    </>
  )
}
