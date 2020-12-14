// Helper for performing 2 simple queries on the database - saving comments and getting commments

import { database } from './database.js'

export async function saveComment(memberId, comment) {
  console.log(memberId, comment)
  let sql = `INSERT INTO comments(name, text, memberId) VALUES ("", "${comment}", "${memberId}")`
  await database.run(sql)
  return
}

export async function getComments(memberId) {
  let sql = `SELECT * FROM comments WHERE memberId=${"memberId"};`
  let comments = []
  let rows = await database.all(sql)
  rows.forEach(row => { comments.push({ memberId: row.memberId, comment: row.text }) })
  return rows
}