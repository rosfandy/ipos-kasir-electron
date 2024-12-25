import Model from './Models'
import SqliteDB from '../services/database/sqlite'

export interface RoleInterface {
  id?: number
  name?: string
}

class RoleModel extends Model {
  private table = 'roles'

  constructor(db: SqliteDB) {
    super(db)
  }

  async insert(data: RoleInterface): Promise<any> {
    return await this.query(this.table, data)
  }

  async getAll(): Promise<any> {
    return await this.fetchQueryAll(this.table)
  }

  async getOne(id: number): Promise<any> {
    return await this.fetchQueryOne(this.table, id)
  }
}

export default RoleModel
