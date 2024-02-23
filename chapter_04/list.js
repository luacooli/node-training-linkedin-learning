// Class 01 - listing files

const fs = require('fs')

fs.readdir('./', (err, files) => {
    if (err) {
        throw new Error
    }

    console.log(files);
})

console.log('reading files...');

// Class 02 - reading files

fs.readFile('./readme.md', 'utf-8', (err, ipsum) => {
    if (err) {
        throw new Error
    }

    console.log(ipsum)
})

console.log('reading readme...');

// Class 03 - writing and appending file

let md = `
This is a new file!!!
=====================

ES6 Template String are cool. They honor whitespace.

* Template Strings
* Node File System
* Readline CLIs

`

fs.writeFile('javascript.md', md.trim(), (err) => {
    if (err) {
        throw new Error
    }

    fs.appendFileSync('javascript.md', '\n\n ###This is Node.js everyone!!')
    console.log('Markdown was created!');
})