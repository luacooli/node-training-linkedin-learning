// Class 01
let hello = 'Hello World from Node.js'
let justNode = hello.slice(17)

console.log(`Who let the ${justNode} out?`)
global.console.log('--------------------------------------------')

// Class 02
const path = require('path')

console.log(__dirname)
console.log(`The file name is ${path.basename(__filename)}`)

for (let key in global) {
  console.log(key)
}

console.log('--------------------------------------------')

// Class 03
console.log(process.argv)

function grab(flag) {
  let indexAfterFlag = process.argv.indexOf(flag) + 1
  return process.argv[indexAfterFlag]
}

let greeting = grab('--greeting')
let user = grab('--user')

console.log(greeting);
console.log(user);
