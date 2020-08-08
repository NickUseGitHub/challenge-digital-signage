import * as React from 'react'

export default function Loading() {
  return (
    <div className="w-full vh-full flex flex-col justify-center items-center">
      <i className="fa fa-spinner fa-pulse fa-3x fa-fw" />
      <div className="mt-3">
        <span className="font-bold text-3xl">Loading...</span>
      </div>
    </div>
  )
}
