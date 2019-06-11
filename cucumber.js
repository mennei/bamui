
const formatOps = {
  snippetInterface:"synchronous"
}

module.exports = {
  default: `-t "not @dont-run" -t "not @prod"--format-options '${JSON.stringify(formatOps)}' -f json:test/report.json`,
  all: `-t "not @dont-run"--format-options '${JSON.stringify(formatOps)}'  -f json:test/report.json`,
  dev: `-t "not @dont-run" -t "not @prod" --format-options '${JSON.stringify(formatOps)}'  -f json:test/report.json`,
  prod: `-t "not @dev"--format-options '${JSON.stringify(formatOps)}'  -f json:test/report.json`
};
