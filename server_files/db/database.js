// Create a database from pre-existing db file, has already been populated with create_database script

import sqlite3 from 'sqlite3'

function startDatabase() {
  return new sqlite3.Database('./server_files/db/database.db')
}

export const database = startDatabase()