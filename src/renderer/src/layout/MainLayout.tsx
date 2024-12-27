import React from 'react'
import { Sidebar } from '../components/sidebar/Sidebar'
import { Header } from '../components/header/Header'

interface LayoutProps {
  children: React.ReactNode
}

const MainLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <main>
        <div className="flex">
          <Sidebar />
          <div className="w-full pt-[10vh] pl-[4.65em]">{children}</div>
        </div>
      </main>
    </div>
  )
}

export default MainLayout
