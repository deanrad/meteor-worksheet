Package.describe({
  summary: " \* Fill me in! *\ ",
  version: "1.0.0",
  git: " \* Fill me in! *\ "
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
