const fs = require('fs')

let answerStream

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

// create the file and the header file
process.stdin.once('data', (data) => {
  let name = data.toString().trim()
  let fileName = `./${name}.md`

  if (fs.existsSync(fileName)) {
    fs.unlinkSync(fileName)
  }

  answerStream = fs.createWriteStream(fileName)
  answerStream.write(`Question answers for ${name} \n ============= \n`)
})

// for each data response it creats a new line in the markdown file for the question and for the answer
process.stdin.on('data', (data) => {
  let answer = data.toString().trim()

  answerStream.write(`Question: ${questions[answers.length]} \n`)

  answerStream.write(`Answer: ${answer} \n`, () => {
    if (answers.length < questions.length) {
      ask(answers.length)
    } else {
      process.exit()
    }
  })

  answers.push(answer)
})

process.on('exit', () => {
  answerStream.close()

  process.stdout.write('\n\n\n\n')
  process.stdout.write(
    `Go ${answers[1]} ${answers[0]} you can finish writing ${answers[2]} later, enjoy your life!`
  )
})

ask()
