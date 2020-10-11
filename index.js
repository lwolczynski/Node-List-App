const fs = require('fs');
const process = require('process');

fs.readdir(process.cwd(), (err, filenames) => {
    if (err) {
        console.log(err);
    }
    console.log(filenames);
});