import { Route, Routes } from 'react-router-dom'
import { LoginPage } from './pages/login/page'
import { DashboardPage } from './pages/dashboard/page'

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
    </Routes>
  )
}
