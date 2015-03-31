Package.describe({
  name: "deanius:worksheet",
  summary: "Set up an object with a list of raw values and formulae, reactively bound like in a spreadsheet.",
  version: "1.0.0",
  git: "https://github.com/chicagogrooves/deanius-worksheet",
  documentation: "README.md"
});

Package.onUse(function (api) {
  api.versionsFrom("METEOR@1.0");
  api.use(["tracker", "reactive-var", "underscore"]);
  api.addFiles("deanius:worksheet.js", ["client", "server"]);
  api.export("worksheet", ["client", "server"]);
});

Package.onTest(function (api) {
  // not currently working with peerlibrary:server-autorun - tests dont complete
  api.use(["mike:mocha-package", "practicalmeteor:chai", "coffeescript"]);
  api.use("deanius:worksheet");
  api.addFiles("tests/shared/index.coffee", ["client", "server"]);
});
