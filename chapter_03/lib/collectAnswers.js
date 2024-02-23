const readline = require('readline')
const { EventEmitter } = require('events')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

module.exports = (questions, done) => {
  const answers = []
  const emmiter = new EventEmitter()

  const questionAnswers = (answer) => {
    emmiter.emit('answer', answer)
    answers.push(answer.trim())

    if (answers.length < questions.length) {
      rl.question(questions[answers.length], questionAnswers)
    } else {
      return done(answers)
    }
  }

  rl.question(questions[0], questionAnswers)
  return emmiter
}
