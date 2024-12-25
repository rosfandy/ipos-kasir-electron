import { ipcRenderer } from 'electron'

export const userApi = {
  get: async (id?: number) => {
    if (id) {
      return await ipcRenderer.invoke('users-get-one', id)
    } else {
      return await ipcRenderer.invoke('users-get-all')
    }
  },
  findOne: async (field: string, value: any) => {
    return await ipcRenderer.invoke('users-get-one-by-field', field, value)
  }
}

export const authApi = {
  login: async (data: any) => {
    const response = await ipcRenderer.invoke('auth-login', data)
    return response
  }
}
