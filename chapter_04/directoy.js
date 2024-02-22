// Class 04 - creating directory

const fs = require('fs')

if (fs.existsSync('your-files-here')) {
    console.log('file already exists!')
} else {
    fs.mkdir('your-files-here', (err) => {
        if (err) {
            console.log(`ERROR: ${err}`);
        } else {
            console.log('directoy created');
        }
    })

}
