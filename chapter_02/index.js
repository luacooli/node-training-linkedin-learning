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

console.log(greeting)
console.log(user)

// Class 04 and 05
process.stdout.write('Hello \n\n')

const questions = [
  "What's your name?",
  'What would you rather be doing?',
  "what's your preffered programming language?",
]

const answers = []

function ask(i = 0) {
  process.stdout.write(`\n\n\n ${questions[i]}`)
  process.stdout.write(' > ')
}

ask()

process.stdin.on('data', (data) => {
  answers.push(data.toString().trim())

  if (answers.length < questions.length) {
    ask(answers.length)
  } else {
    process.exit()
  }
})

process.on('exit', () => {
  process.stdout.write('\n\n\n\n')
  process.stdout.write(
    `Go ${answers[1]} ${answers[0]} you can finish writing ${answers[2]} later, enjoy your life!`
  )
})
