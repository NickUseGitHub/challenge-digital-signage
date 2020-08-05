import Koa from 'koa'
import { SwaggerAPI } from 'koa-joi-router-docs'
import koaSwagger from 'koa2-swagger-ui'
import KoaRouter, { Joi } from 'koa-joi-router'

const app = new Koa()
const port = 3001

const swaggerAPI = new SwaggerAPI()
const apiRoute = KoaRouter()

apiRoute.prefix('/apis')
apiRoute.route({
  method: 'get',
  path: '/hello',
  validate: {
    query: {
      name: Joi.string().required(),
    },
  },
  handler: (ctx) => {
    ctx.status = 201
    ctx.body = {
      hello: 'world',
    }
  },
})

swaggerAPI.addJoiRouter(apiRoute)

const spec = swaggerAPI.generateSpec({
  info: {
    title: 'Backend API',
    description: 'API Docs',
    version: '1.0',
  },
  basePath: '/',
  tags: [
    /* This could be populated to show our API in sections in UI */
  ],
})

// Swagger JSON Doc
apiRoute.get('/_api.json', async (ctx) => {
  ctx.body = JSON.stringify(spec, null, 2)
})

app.use(apiRoute.middleware())
app.use(
  koaSwagger({
    routePrefix: '/api-docs',
    swaggerOptions: {
      url: '/apis/_api.json',
    },
  }),
)

app.listen(port, function () {
  console.log(`App is listen on port: ${port}`)
})
