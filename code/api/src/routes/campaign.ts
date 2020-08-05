import KoaRouter from 'koa-joi-router'

const route = KoaRouter()

route.prefix('/campaigns')
route.route({
  method: 'get',
  path: '/',

  handler: (ctx) => {
    ctx.body = [
      {
        id: '1',
        name: 'name',
      },
    ]
  },
})

export default route
