import Koa from 'koa'
import koaSwagger from 'koa2-swagger-ui'
import apiRoutes from './routes'

const app = new Koa()
const port = 3001

app.use(apiRoutes.middleware())
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
