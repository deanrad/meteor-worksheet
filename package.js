Package.describe({
  summary: "Schedules execution of functions At-Client, At-Server, At-Device.",
  version: "0.2.2",
  git: "https://github.com/chicagogrooves/deanius-at-at"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0');
  api.addFiles('deanius:at-at.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('deanius:at-at');
  api.addFiles('deanius:at-at-tests.js');
});
