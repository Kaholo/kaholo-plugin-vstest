const { handleStringArray, exec } = require("./helpers");


async function runTest(action, settings) {
    let args = handleStringArray(action.params.testFiles).map(testFile => `"${testFile}"`);

    if (!args || !settings.exePath){ // args is actually test files
        throw "One of the required parameters were not provided";
    }

    const testSettings = (action.params.settings || "").trim();
    const testsNames = handleStringArray(action.params.tests);

    if (testSettings) args.push(`/Settings:${testSettings}`)
    if (testsNames) args.push(`/Tests:${testsNames.join(',')}`)
    if (action.params.enableCodeCoverage) args.push('/Enablecodecoverage')
    if (action.params.inIsolation) args.push('/InIsolation')
    if (action.params.parallel) args.push('/Parallel')
    if (action.params.cliArgs) args.push(action.params.cliArgs);
    const command = `"${settings.exePath}" ${args.join(' ')}`

    return exec(command);
}

module.exports = {
    runTest: runTest
}