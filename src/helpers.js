const child_process = require("child_process")

function handleStringArray(value) {
    if (!value) {
        return [];
    }
    if (typeof value == 'string') {
        // split string by new lines, trim each line, and remove empty lines from array
        return value.split("\n").map(line => line.trim()).filter(line => line);
    }
    if (Array.isArray(value)){
        return value;
    }
    throw "Value must be either a string or an array"
}

async function exec(command) {
    return new Promise((resolve, reject) => {
        child_process.exec(command, (error, stdout, stderr) => {
            if (error) {
                return reject(`exec error: ${error}`);
            }
            if (stderr) {
                console.log(`stderr: ${stderr}`);
            }
            return resolve(stdout);
        });
    });
}

module.exports = {
    handleStringArray,
    exec
}