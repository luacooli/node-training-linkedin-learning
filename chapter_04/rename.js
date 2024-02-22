// Class 05 - renaming  and removing files

const fs = require('fs')

//renaming file
// fs.renameSync('./javascript.md', './new-name-to-javascript.md')

//console.log('javascript.md file renamed');

// moving file to existing directory
// fs.rename('./new-name-to-javascript.md', './your-files-here/new-name-to-javascript.md', (err) => {
//     if (err) {
//         throw err
//     }
//
//     console.log('Javascrip.md renamed file moved');
// })

// deleting file
// fs.unlinkSync('./your-files-here/new-name-to-javascript.md')

// fs.unlink('./readme.md', (err) => {
//     if (err) {
//         throw err
//     }
//
//     console.log('Readme is gone');
// })

// Class 06 - renaming and removing directories

fs.rmdir('./your-files-here', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('./your/files-here directory removed');
    }
})

fs.readdirSync('./your-files-here/').forEach((file) => {
    fs.renameSync(`./your-files-here/${file}`, `./library/${file}`)
})

console.log("Files removed");
fs.rmdirSync('./your-files-here/')
console.log("Folder removed");