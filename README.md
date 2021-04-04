# kaholo-plugin-vstest
VSTest plugin for Kaholo, uses command line.
* Please Notice this plugin works only on agents with Windows OS.

## Settings 
1. VSTest EXE Path (String) **Required** - The path to the exe file of VSTest on the agent.

## Method: Run Test
Run a test or multiple tests. You can see here the command [documentation](https://docs.microsoft.com/en-us/visualstudio/test/vstest-console-options?view=vs-2019).

### Parameters
1. Test Files (Text/Array) **Required** - The path(s) to the test files to run. Can be passed either as text, using new lines to seperate multiple values, or as an array from code.
2. Settings (String) **Optional** - Path to settings file that includes any additional settings to run tests with. For more information, see [Configure unit tests using a .runsettings file](https://docs.microsoft.com/en-us/visualstudio/test/configure-unit-tests-by-using-a-dot-runsettings-file?view=vs-2019).
3. Tests (Text/Array) **Optional** - When provided run only tests with the names provided. Can be passed either as text, using new lines to seperate multiple values, or as an array from code.
4. Enable Code Coverage (Boolean) **Optional** - Enables data diagnostic adapter CodeCoverage in the test run. Default used is according to default settings in VSTest.
5. Parallel (Boolean) **Optional** - Specifies that the tests be executed in parallel. Default is false.
6. In Isolation (Boolean) **Optional** - Runs the tests in an isolated process. This isolation makes the vstest.console.exe process less likely to be stopped on an error in the tests, but tests might run slower. Default is false.
7. CLI Args (String) **Optional** - Any other cli argumants or flags to include in the command.
