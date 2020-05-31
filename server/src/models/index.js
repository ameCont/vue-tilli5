const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
//const config = require('../config/config')
const { config, otherConfigs } = require =('../config/config')
const db = {}

//console.log(config)

const sequelize = new Sequelize(
    config.db.database,
    config.db.user,
    config.db.password,
    config.db.options
)

fs
    .readdirSync(__dirname)
    .filter((file) => {
        file !== 'index.js'
    }
    )
    .forEach((file) => {
        const model = sequelize.import(path.join(__dirName, file))
        db[model.name] = model
    })

/*
var sqlite3 = require('sqlite3').verbose()

db.serialize(function () {
  db.run('CREATE TABLE if not exists Users
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email VARCHAR(255) UNIQUE,
    password VARCHAR(255),
    createdAt DATETIME NOT null,
    updateAt DATETIME NOT null,
    UNIQUE('email') ')
  })
  /*
  var stmt = db.prepare('INSERT INTO lorem VALUES (?)')

  for (var i = 0; i < 10; i++) {
    stmt.run('Ipsum ' + i)
  }

  stmt.finalize()

  db.each('SELECT rowid AS id, info FROM lorem', function (err, row) {
    console.log(row.id + ': ' + row.info)
  })
})
db.close()
*/

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
