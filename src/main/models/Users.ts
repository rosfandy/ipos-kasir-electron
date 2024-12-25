import Model from './Models'
import SqliteDB from '../services/database/sqlite'

export interface ResponseData {
  id: string
  name: string
  email: string
  role_id: number
}

export interface UserInterface {
  id?: number
  name?: string
  phone?: string
  supabase_id?: string
  email: string
  password: string
  created_at?: string
  updated_at?: string
}

class UserModel extends Model {
  private table = 'users'

  constructor(db: SqliteDB) {
    super(db)
  }

  async insert(data: UserInterface): Promise<any> {
    return await this.query(this.table, data)
  }

  async getAll(): Promise<any> {
    return await this.fetchQueryAll(this.table)
  }

  async getOne(id: number): Promise<any> {
    return await this.fetchQueryOne(this.table, id)
  }

  async getOneByField(field: string, value: any): Promise<any> {
    return await this.fetchOneByQuery(this.table, field, value)
  }
}

export default UserModel
