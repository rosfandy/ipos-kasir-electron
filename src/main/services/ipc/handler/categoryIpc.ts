import { ipcMain } from 'electron'

const prefix = 'categories'

export const handleCategories = () => {
  ipcMain.handle(`${prefix}-get-all`, async () => {
    return ''
  })
  ipcMain.handle(`${prefix}-get-one`, async () => {
    return ''
  })
  ipcMain.handle(`${prefix}-insert`, async () => {
    return ''
  })
  ipcMain.handle(`${prefix}-update`, async () => {
    return ''
  })
}
