// electron.d.ts
import 'electron'

declare global {
  interface UserAPI {
    get(id: number): Promise<{ success: boolean; data?: any; error?: string }>
  }

  interface AuthAPI {
    login(payload: {
      email: string
      password: string
    }): Promise<{ success: boolean; data?: any; error?: string }>
  }

  interface API {
    auth: AuthAPI
    user: UserAPI // Add the user API here
    // Add other API interfaces here as needed
  }

  interface Window {
    electron: {
      ipcRenderer: {
        send: (channel: string, ...args: any[]) => void
        invoke: (channel: string, ...args: any[]) => Promise<any>
      }
      process: {
        versions: any
      }
    }
    api: API // Use the structured API type
  }
}
