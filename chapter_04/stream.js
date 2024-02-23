const fs = require('fs')

let stream = fs.createReadStream('./chat-logs/george-and-ben.log', 'utf-8')

let data

stream.on('data', (chunk) => {
  console.log('read stream started')
  console.log('==============')
  console.log(chunk)
})

stream.on('data', (chunk) => {
  console.log(`chunk: ${chunk.length}`)
  data += chunk
})

stream.on('end', () => {
  console.log(`finished ${data.length}`)
})

console.log('Reading the file...')

// seeing some movie online takes the same process that reading this file. we can start
// watching it before the entire movie is fully dowloaded. that's because we're  breaking
// down the video into chunks that are streamed. so we can watch the first part of the
// movie while the rest is still being delivered
