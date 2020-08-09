import React from 'react'
import { useHistory } from 'react-router-dom'

export default function HomePage() {
  const history = useHistory()

  const goto = (path: string) => {
    history.push(path)
  }

  const kiosList: string[] = ['K01', 'K02', 'K03']

  const onLiClick = (kiosTag: string) => () => goto(`/${kiosTag}`)

  return (
    <div className="vh-full bg-blue-500 flex flex-col justify-center items-center">
      <h1 className="text-4xl">
        This is Adsvertiser Machine. Please select machine
      </h1>
      <ul>
        {kiosList.map((kiosTag) => (
          <li
            className="cursor-pointer text-white text-2xl hover:text-orange-400"
            onClick={onLiClick(kiosTag)}
          >
            {kiosTag}
          </li>
        ))}
      </ul>
    </div>
  )
}
