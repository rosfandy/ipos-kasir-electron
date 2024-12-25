import path from 'path'
import fs from 'fs'
import SqliteDB from './sqlite'
import Database from 'better-sqlite3'
import { is } from '@electron-toolkit/utils'
import chalk from 'chalk'
import { copyFileSync } from 'fs'
import { app } from 'electron'

const dbname = import.meta.env.VITE_LOCALDB
const prodDbPath = path.join(app.getPath('userData'), `${dbname}.db`)
const devDbPath = path.join(__dirname, `../../db/${dbname}.db`)

const dbPath = is.dev ? devDbPath : prodDbPath

export const db = new SqliteDB(dbPath)

export const connectDB = async () => {
  console.log(chalk.blue(`[PROCESS] Database path: ${dbPath}`))
  if (!is.dev) {
    if (fs.existsSync(prodDbPath)) {
      fs.unlinkSync(prodDbPath)
      console.log(chalk.blue(`[PROCESS] Existing production database deleted.`))
    }

    copyFileSync(devDbPath, prodDbPath)
    console.log(chalk.blue(`[PROCESS] Development database copied to production.`))
  }

  if (!fs.existsSync(dbPath)) {
    const tempDb = new Database(dbPath)
    tempDb.close()
    console.log(chalk.blue(`[PROCESS] Database created.`))
  }

  try {
    await db.connect()
    console.log(chalk.green(`[INFO] Database connected.`))
  } catch (error) {
    if (error instanceof Error) throw error.message
  }
}
