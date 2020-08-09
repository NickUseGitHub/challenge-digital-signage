import { Middleware } from 'koa'
import Boom from 'boom'

function isBoom(error: any): boolean {
  return error.isBoom
}

function getErrorDetails(error: any) {
  let status
  let body
  if (isBoom(error)) {
    status = error.output.statusCode
    body = {
      ...error.output.payload,
      ...error.data,
    }
  } else {
    console.error(error)
    status = error.status || 500
    body = {
      message: error.message,
    }
  }

  return { status, body }
}

const errorMiddleware: Middleware = async (ctx, next) => {
  try {
    await next()
  } catch (error) {
    const { status, body } = getErrorDetails(error)
    ctx.status = status
    ctx.body = body
  }
}

export default errorMiddleware
