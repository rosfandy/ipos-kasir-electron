export const insertIntoTable = (table: string, data: Record<string, any>) => {
  const columns = Object.keys(data).filter((key) => key !== 'id')
  const placeholders = columns.map(() => '?').join(', ')
  const query = `INSERT INTO ${table} (${columns.join(', ')}) VALUES (${placeholders})`
  return query
}

export const fetchAllFromTable = (table: string) => {
  const query = `SELECT * FROM ${table}`
  return query
}

export const fetchOneFromTable = (table: string, id: any) => {
  const query = `SELECT * FROM ${table} WHERE id = ${id}`
  return query
}

export const fetchOneFromTableByQuery = (table: string, field: string) => {
  const query = `SELECT * FROM ${table} WHERE ${field} = ?`
  return query
}
