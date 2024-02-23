// Class 01
// const path = require('path')
// const util = require('util')
// const v8 = require('v8')

// console.log(path.basename(__filename))

// const dirUploads = path.join(__dirname, 'www', 'files', 'uploads')
// console.log(dirUploads)

// util.log(dirUploads)
// util.log(path.basename(__filename))
// util.log(v8.getHeapSpaceStatistics())

// console.log('--------------------------------------------')

// // Class 02 and 03
// const readline = require('readline')
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// })

// const questions = [
//   "What's your name?",
//   'Where do you live?',
//   'What are you going to do with Node.js?',
// ]

// function collectAnswers(questions, done) {
//   const answers = []

//   const questionAnswers = (answer) => {
//     answers.push(answer.trim())

//     if (answers.length < questions.length) {
//       rl.question(questions[answers.length], questionAnswers)
//     } else {
//       return done(answers)
//     }
//   }

//   rl.question(questions[0], questionAnswers)
// }

// collectAnswers(questions, (answers) => {
//   console.log(`Thank you for your answer!`)
//   console.log(answers)
//   process.exit()
// })

// // Class 04
// const myModule = require('./myModule')

// console.log(myModule.anything, myModule.who)

// myModule.inc()
// myModule.inc()
// myModule.inc()

// console.log(`the count is ${myModule.getCount()}`)

// Class 05
const events = require('events')

let emitter = new events.EventEmitter()

emitter.on('customEvent', (message, user) => {
  console.log(`${user}: ${message}`)
})

emitter.emit('customEvent', 'Hello World!', 'Computer')
emitter.emit('customEvent', "That's pretty cool", 'Lua')

process.stdin.on('data', (data) => {
  const input = data.toString().trim()

  if (input === 'exit') {
    emitter.emit('customEvent', 'Good bye', 'preocess')
    process.exit()
  }

  emitter.emit('customEvent', data.toString().trim(), 'Terminal')
})
