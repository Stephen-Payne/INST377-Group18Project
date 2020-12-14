// Helper for performing 2 simple queries on the database - saving comments and getting commments

import { database } from './database.js'

export async function saveComment(memberId, comment) {
  console.log(memberId, comment)
  let sql = `INSERT INTO comments(name, text, memberId) VALUES ("", "${comment}", "${memberId}")`
  await database.run(sql)
  return
}

export async function getComments(memberId) {
  return new Promise(function (resolve, reject) {
    let sql = `SELECT * FROM comments WHERE memberId="${memberId}";`
    let comments = []
    database.all(sql, [], (err, rows) => {
      if (err) {
        throw err
      }
      rows.forEach(row => { 
        comments.push({ memberId: row.memberId, comment: row.text }) 
        console.log(row)
      })
      resolve(comments)
    })
  })
}