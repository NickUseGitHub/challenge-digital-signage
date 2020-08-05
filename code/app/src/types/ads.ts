export type AdType = 'image' | 'gif' | 'vdo'

export interface Ads {
  id: string
  name: string
  type: AdType
  srcUrl: string
}

export interface ImageAds extends Ads {}
export interface VideoAds extends Ads {}
