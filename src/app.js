const child_process = require("child_process")

function runTest(action, settings) {
    return new Promise((resolve, reject) => {
        var vstestPath = settings.exePath;
        var testFiles = _handleStringArray(action.params.testFiles);
        var cliArgs = action.params.cliArgs;

        if (!Array.isArray(testFiles))
            return reject("Test Files must be either a string or an array");

        var inIsolation = action.params.inIsolation;
        var parallel = action.params.parallel;
        var testSettings = action.params.settings;
        var testsNames = action.params.tests;
        var enableCodeCoverage = action.params.enableCodeCoverage;


        var args = [
            testFiles.join(' ')
        ];

        if (testSettings) args.push(`/Settings:${testSettings}`)
        if (testsNames) args.push(`/Tests:${testsNames.join(',')}`)
        if (enableCodeCoverage) args.push('/Enablecodecoverage')
        if (inIsolation) args.push('/InIsolation')
        if (parallel) args.push('/Parallel')
        if (cliArgs) args.push(cliArgs);

        var command = `${vstestPath} ${args.join(' ')}`

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

/**
 * @param {*} value 
 * @returns {string[]}
 */
function _handleStringArray(value) {
    if (typeof value == 'string') {
        return [value]
    }
    return value;
}

function isObject(value) {
    return !!(value && typeof value === 'object' && value.constructor === Object);
}


module.exports = {
    runTest: runTest
}