Package.describe({
  summary: 'Turn JS objects into reactive Spreadsheet-like objects, hence the name "worksheet"',
  version: '0.0.1',
  git: 'https://github.com/chicagogrooves/deanius-worksheet'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.0');
  api.addFiles('deanius:worksheet.js', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('deanius:worksheet');
  api.addFiles('deanius:worksheet-tests.js');
});
