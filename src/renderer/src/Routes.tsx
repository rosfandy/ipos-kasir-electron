import { Route, Routes } from 'react-router-dom'
import { LoginPage } from './pages/login/page'
import { DashboardPage } from './pages/dashboard/page'
import { MasterPage } from './pages/master/page'
import { ProductPage } from './pages/product/page'
import { PointPage } from './pages/point/page'
import { TransactionPage } from './pages/transaction/page'
import { MasterUnit } from './pages/master/unit/page'
import { MasterStock } from './pages/master/stock/page'
import { MasterPrice } from './pages/master/price/page'
import { MasterCategory } from './pages/master/category/page'

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/master" element={<MasterPage />} />
      <Route path="/master/unit" element={<MasterUnit />} />
      <Route path="/master/stock" element={<MasterStock />} />
      <Route path="/master/price" element={<MasterPrice />} />
      <Route path="/master/category" element={<MasterCategory />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/add-product" element={<>Add Product</>} />
      <Route path="/point" element={<PointPage />} />
      <Route path="/transaction" element={<TransactionPage />} />
    </Routes>
  )
}
