import sqlite from 'sqlite-electron'

class SqliteDB {
  private static instance: SqliteDB
  private dbFilePath: string

  constructor(dbFilePath: string) {
    this.dbFilePath = dbFilePath
  }

  public static getInstance(dbFilePath: string): SqliteDB {
    if (!SqliteDB.instance) {
      SqliteDB.instance = new SqliteDB(dbFilePath)
    }
    return SqliteDB.instance
  }

  async connect(): Promise<void> {
    try {
      const isConnected = await sqlite.setdbPath(this.dbFilePath)
      if (isConnected) {
        return await sqlite.fetchOne('SELECT 1')
      }
    } catch (error) {
      if (error instanceof Error) throw error.message
    }
  }
}

export default SqliteDB
