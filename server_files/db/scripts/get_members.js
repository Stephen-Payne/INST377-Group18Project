// This script populates the database with all the members from the Pro Publica API

import fetch from 'node-fetch'
import { database } from '../database.js'

// Helper function to save a member to the database

// database.run(`INSERT INTO members(id) VALUES ("A000A");`)

let sql = `SELECT * FROM members;`

database.all(sql, [], (err, rows) => {
  if (err) {
    throw err
  }

  rows.forEach(row => {
    console.log(row)
  })
})