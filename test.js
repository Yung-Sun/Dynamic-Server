const fs = require('fs')

//读数据库
const usersString = fs.readFileSync('./database/user.json').toString()
const usersArray = JSON.parse(usersString)

//写数据库
const user3 = {id:3, name:'Tony',password:'yyy'}
usersArray.push(user3)
const string = JSON.stringify(usersArray)
fs.writeFileSync('./database/user.json', string)