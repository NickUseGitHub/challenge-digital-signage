import Koa from 'koa'
import cors from '@koa/cors'
import koaSwagger from 'koa2-swagger-ui'

import apiRoutes from './routes'
import errorMiddleware from './routes/middlewares/errorMiddleware'

const app = new Koa()
const port = 3001

app.use(cors())

app.use(errorMiddleware)
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
