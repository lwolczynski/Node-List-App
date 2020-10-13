const fs = require('fs');
const process = require('process');
const chalk = require('chalk');
const path = require('path');

const lstat = fs.promises.lstat;

const dir = process.argv[2] || process.cwd();


fs.readdir(dir, async (err, filenames) => {
    if (err) {
        console.log(err);
    }
    
    const stats = await Promise.all(filenames.map(filename => lstat(path.join(dir, filename))));

    for (let stat of stats) {
        const index = stats.indexOf(stat);
        stat.isFile() ? console.log(filenames[index]) : console.log(chalk.bold(filenames[index]))
    }
});