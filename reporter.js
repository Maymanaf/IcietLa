const fs = require('fs');

/** @implements {import('@playwright/test/reporter').Reporter} */
class MyReporter {

  onBegin(config, suite) {
    console.log('====================================================== ');
    console.log(`Execution ${suite.allTests().length} tests`);
    console.log('======================================================');
  }

  onTestBegin(test) {
    console.log(`Starting test ${test.title}`);
  }

  onTestEnd(test, result) {
    const execTime = result.duration / 1000;
    const data = {
      test: test.title,
      status: result.status,
      executionTime: `${execTime} seconds`,
      errors: result.errors,
    };
    const dataToString = JSON.stringify(data, null, 2);
    console.log(`Finished test : ${dataToString}`);
    fs.writeFileSync("./playwright-report/test-result.json", dataToString);
  }

  onEnd(result) {
    console.log('======================================================');
    console.log(`Finished the run: ${result.status}`);
    console.log('======================================================');

  }
}

module.exports = MyReporter;