import React from 'react'
import './ImageAds.css'

interface ImageAdsProps {
  src: string
}

export default function ImageAds({ src }: ImageAdsProps) {
  return (
    <div
      className="image-ads"
      style={{
        backgroundImage: `url('${src}')`,
      }}
    />
  )
}
