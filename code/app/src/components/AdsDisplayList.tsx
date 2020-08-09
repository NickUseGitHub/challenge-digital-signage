import React, { useState, useEffect } from 'react'
import {
  AdType,
  VideoAds as VideoAdsType,
  ImageAds as ImageAdsType,
} from 'types/ads'
import { shuffle } from 'lodash'
import ImageAds from './imageAds/ImageAds'
import VideoAds from './videoAds/VideoAds'

type AdsDisplayListType = Array<ImageAdsType | VideoAdsType>

interface AdsDisplayListProps {
  adsList: AdsDisplayListType
}

export default function AdsDisplayList({ adsList }: AdsDisplayListProps) {
  const [restAdsList, setRestAdsList] = useState<AdsDisplayListType>(adsList)
  const [ads] = shuffle(restAdsList)

  useEffect(
    function () {
      if (!ads) return

      const timeoutId = setTimeout(function () {
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
