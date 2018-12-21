(function () {
    "use strict";
    /*
     * common.js
     * @Author: Brenton O'Callaghan
     * @Date: 21st December 2018
     * @Description: common functions for use during the Advent of Code 2018
     */

    /*global console, exports*/

    var testsFailed = 0;

    // Banner for the console at the start of every solution.
    exports.logBanner = function (solutionID) {
        console.log("=========================================");
        console.log("Welcome to Advent of Code 2018");
        console.log("Solution: " + solutionID);
        console.log("Author: @callaghan001");
        console.log("=========================================");
    };

    // function to run a test, compare the output and return
    exports.runTest = function (testFunction, input, expectedOutput) {

        var result = testFunction(input);

        if (result === expectedOutput) {
          // test has passed - return true
            console.log("Test Passed - input: " + input);
            return;
        }

        console.log("Test FAILED - input: " + input + " output: " + result + " expected: " + expectedOutput);
        testsFailed += 1;
        return;
    };

    // Takes an algorithm function and two arrays of inputs and outputs.
    exports.runTestSuite = function (algorithm, inputs, outputs) {

        console.log("Starting Tests");
        var i;
        for (i = 0; i < inputs.length; i += 1) {
            this.runTest(algorithm, inputs[i], outputs[i]);
        }

    };

    // check if there have been any test failures
    exports.hasFailedTests = function () {
        return (testsFailed > 0);
    };

}());
