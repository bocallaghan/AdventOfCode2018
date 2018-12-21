(function () {
    "use strict";
    /*
     * 1a.js
     * @Author: Brenton O'Callaghan
     * @Date: 21st December 2018
     * @Description: Challenge 1a of the Advent of Code challenge 2018
     */

    /*global console, require*/

    var common = require('./common.js'),

        // Testing Variables
        testInputs  = ['1122', '1111', '1234', '91212129'],
        testOutputs = ['3', '4', '0', '9'],

        examInput = '',
        examResult = '',

        1aFunction = function (varaible) {
        };

    common.logBanner("1a");
    common.runTestSuite(solveCaptcha, testInputs, testOutputs);

    // If all tests are passed then run the program
    if (common.hasFailedTests()) {
        console.log("All tests did NOT pass - aborting.....");
        return;
    }

    // Run the algorithm on the input
    examResult = solveCaptcha(examInput).toString();

    console.log("Result from given input is: " + examResult);
    console.log('Complete');

}());
