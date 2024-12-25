import IpcProvider from './provider'
import {
  handleAuth,
  handleCategories,
  handleCustomers,
  handleProducts,
  handleRoles,
  handleTransactions,
  handleUsers
} from './handler'

const ipc = new IpcProvider()
ipc.registerHandler([
  handleUsers,
  handleProducts,
  handleRoles,
  handleTransactions,
  handleCategories,
  handleCustomers,
  handleAuth
])

export { ipc }
