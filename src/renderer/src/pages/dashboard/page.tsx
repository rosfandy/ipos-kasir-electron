import { useEffect, useState } from 'react'

interface UserData {
  id: string
  name: string
  email: string
  role_id: number
}

export function DashboardPage() {
  const [userData, setUserData] = useState<UserData | null>(null)
  useEffect(() => {
    const data = JSON.parse(sessionStorage.getItem('user') || '{}')
    setUserData(data)
  }, [])

  return (
    <>
      <div className="">Dashboard</div>
      <div className="">{userData?.name}</div>
      <div className="">{userData?.email}</div>
      <div className="">{userData?.role_id}</div>
    </>
  )
}
