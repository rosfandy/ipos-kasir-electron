import SqliteDB from '../services/database/sqlite'
import { executeQuery, fetchAll, fetchOne } from 'sqlite-electron'
import chalk from 'chalk'

import {
  fetchAllFromTable,
  fetchOneFromTable,
  fetchOneFromTableByQuery,
  insertIntoTable
} from '../utils/query'
import { getCurrentTimestamp } from '../../renderer/src/utils/utils'

class Model {
  protected db: SqliteDB

  constructor(db: SqliteDB) {
    this.db = db
  }

  protected async query(table: string, data: Record<string, any>): Promise<any> {
    try {
      const query = insertIntoTable(table, data)
      console.log(chalk.green(`[INFO] ${getCurrentTimestamp()}: ${query}`))
      const params = Object.values(data).filter((value) => value !== undefined)
      return await executeQuery(query, params)
    } catch (error) {
      if (error instanceof Error) throw error.message
    }
  }

  protected async fetchQueryAll(table: string): Promise<any> {
    try {
      const query = fetchAllFromTable(table)
      console.log(chalk.green(`[INFO] ${getCurrentTimestamp()}: ${query}`))
      return await fetchAll(query)
    } catch (error) {
      if (error instanceof Error) throw error.message
    }
  }

  protected async fetchQueryOne(table: string, id: any): Promise<any> {
    try {
      const query = fetchOneFromTable(table, id)
      console.log(chalk.green(`[INFO] ${getCurrentTimestamp()}: ${query}`))
      return await fetchOne(query)
    } catch (error) {
      if (error instanceof Error) throw error.message
    }
  }

  protected async fetchOneByQuery(table: string, field: string, value: any): Promise<any> {
    try {
      const query = fetchOneFromTableByQuery(table, field)
      console.log(chalk.green(`[INFO] ${getCurrentTimestamp()}: ${query}`))
      return await fetchOne(query, [value])
    } catch (error) {
      if (error instanceof Error) throw error.message
    }
  }
}

export default Model
