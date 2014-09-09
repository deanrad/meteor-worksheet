Package.describe({
  summary: "Helper functions for Meteor",
  version: "0.1.0",
  git: "https://github.com/chicagogrooves/deanius:at-at"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR-CORE@0.9.0-rc12');
  api.addFiles('deanius:at-at.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('deanius:at-at');
  api.addFiles('deanius:at-at-tests.js');
});
