import { ImageAds } from '@app/types/ads'
import { CampaignAds as FrontCampaignAds } from '@app/types/campaignAds'

export function getCampaignAdsList(kiosTag: string) {
  const campaignAdsList: FrontCampaignAds[] = [
    {
      id: '1',
      name: 'testCam naja',
      ads: [
        {
          id: '1',
          name: 'Test',
          srcUrl:
            'https://images.unsplash.com/photo-1596535293503-77f7cbb1f7e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
          type: 'image',
        } as ImageAds,
      ],
    },
  ]

  return campaignAdsList
}
