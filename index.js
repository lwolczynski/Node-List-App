const fs = require('fs');
const process = require('process');

const lstat = fs.promises.lstat;

fs.readdir(process.cwd(), async (err, filenames) => {
    if (err) {
        console.log(err);
    }
    
    const stats = await Promise.all(filenames.map(filename => lstat(filename)));

    for (let stat of stats) {
        const index = stats.indexOf(stat);
        console.log(filenames[index], stat.isFile());
    }
});