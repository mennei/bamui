var reporter = require("cucumber-html-reporter");

var options = {
  theme: "simple",
  jsonFile: "test/report.json",
  output: "test/cucumber_report.html",
  reportSuiteAsScenarios: true,
  launchReport: true
};

reporter.generate(options);
