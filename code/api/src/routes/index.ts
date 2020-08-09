import { SwaggerAPI } from 'koa-joi-router-docs'
import KoaRouter from 'koa-joi-router'
import campaignRoute from '../modules/campaign/controllers'

const routes = [campaignRoute]

const swaggerAPI = new SwaggerAPI()
const apiRoutes = KoaRouter()

apiRoutes.prefix('/apis')

routes.forEach((route) => {
  apiRoutes.use(route.middleware())
  swaggerAPI.addJoiRouter(route)
})

const spec = swaggerAPI.generateSpec({
  info: {
    title: 'Backend API',
    description: 'API Docs',
    version: '1.0',
  },
  basePath: '/apis',
  tags: [
    /* This could be populated to show our API in sections in UI */
  ],
})

// Swagger JSON Doc
apiRoutes.get('/_api.json', async (ctx) => {
  ctx.body = JSON.stringify(spec, null, 2)
})

export default apiRoutes
