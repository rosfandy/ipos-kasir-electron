import { FC, useEffect, useState } from 'react'
import logo from '../../assets/stack.svg'
import { BarItem } from './baritem/BarItem'
import { UserData } from '../../utils/props'

const Header: FC<any> = () => {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [userData, setUserData] = useState<UserData>({ id: '', name: '', email: '', role_id: 0 })

  useEffect(() => {
    const data = JSON.parse(sessionStorage.getItem('user') || '{}')
    setUserData(data)

    const intervalId = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(intervalId)
  }, [])

  return (
    <header className="fixed w-full border-b-[6px] border-b-blue-500 bg-[#282c34] z-10 text-white py-5 px-8">
      <div className="py-2 flex items-center justify-between">
        <div className="flex gap-x-4 items-center">
          <img src={logo} alt="Logo" className="w-auto h-7" />
          <h1 className="font-medium text-xl">iPos Sales</h1>
        </div>
        <div className="flex gap-x-4">
          <BarItem label="Tanggal" text={currentTime.toDateString()} />
          <BarItem label="Waktu" text={currentTime.toLocaleTimeString()} />
          <BarItem label="Kasir" text={userData.name} />
        </div>
      </div>
    </header>
  )
}

export { Header }
