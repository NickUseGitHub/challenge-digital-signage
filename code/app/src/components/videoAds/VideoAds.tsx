import React from 'react'
import './VideoAds.css'

interface VideoAdsProps {
  src: string
  autoPlay?: boolean
}

export default function VideoAds({ src, autoPlay }: VideoAdsProps) {
  return (
    <iframe
      title="vdo"
      className="video-ads"
      width="100%"
      height="100%"
      src={autoPlay === true ? `${src}/?autoplay=1` : src}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  )
}
