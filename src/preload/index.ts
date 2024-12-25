import { contextBridge } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'
import { authApi, userApi } from '../main/services/api'

// Custom APIs for renderer
const api = {
  auth: authApi,
  user: userApi
}
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error('Failed to expose APIs:', error)
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI
  // @ts-ignore (define in dts)
  window.api = api
}
