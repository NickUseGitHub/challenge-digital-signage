import React from 'react'
import './VideoAds.css'

export default function VideoAds() {
  return (
    <iframe
      className="video-ads"
      width="100%"
      height="100%"
      src="https://www.youtube.com/embed/OvISV6qsTYw?autoplay=1"
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  )
}
