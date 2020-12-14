// Helper for performing 2 simple queries on the database - saving comments and getting commments

import { database } from './database.js'

async function saveComment(memberId, comment) {
  let sql = `INSERT INTO comments(name, text, memberId) VALUES ("", ${comment}, ${memberId})`
  await database.run(sql)
  return
}

async function getComments(memberId) {
  let sql = `SELECT * FROM comments WHERE member=${"memberId"};`
  let comments = []
  let rows = await database.all(sql)
  rows.forEach(row => { comments.push({ text: row.text }) })
  return rows
}

module.exports = { saveComment, getComments }