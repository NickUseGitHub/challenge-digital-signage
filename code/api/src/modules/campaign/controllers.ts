import KoaRouter, { Joi } from 'koa-joi-router'
import Boom from 'boom'
import { getCampaignAdsList } from './services'
const route = KoaRouter()

route.prefix('/campaigns')
route.route({
  method: 'get',
  path: '/:kiosTag',
  validate: {
    params: {
      kiosTag: Joi.string().required(),
    },
  },
  handler: (ctx) => {
    const { kiosTag } = ctx.params

    if (!kiosTag) {
      throw Boom.badRequest('kiosTag is not passed.')
    }

    ctx.body = getCampaignAdsList(kiosTag)
  },
})

export default route
