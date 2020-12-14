import sqlite3 from 'sqlite3'

let db

function startDatabase() {
  db = new sqlite3.Database('./server_files/db/database.db')
  createTables()
  return db
}


function populateTables() {

}

export const database = startDatabase()