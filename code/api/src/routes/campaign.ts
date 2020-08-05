import KoaRouter from 'koa-joi-router'
import { CampaignAds } from '@app/types/campaignAds'
import { ImageAds } from '@app/types/ads'

const route = KoaRouter()

route.prefix('/campaigns')
route.route({
  method: 'get',
  path: '/',
  handler: (ctx) => {
    const campaignAdsList: CampaignAds[] = [
      {
        id: '1',
        name: 'testCam',
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

    ctx.body = campaignAdsList
  },
})

export default route
