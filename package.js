Package.describe({
    name: 'jossoco:bootstrap-datepicker',
    summary: 'Meteor package wrapping bootstrap-datepicker: https://github.com/eternicode/bootstrap-datepicker',
    version: '1.0.0',
    git: 'https://github.com/jossoco/meteor-bootstrap-datepicker.git'
});

Npm.depends({
    'bootstrap-datepicker': '1.5.1'
});

Package.onUse(function(api) {
    api.versionsFrom('1.0');
    api.addFiles('.npm/package/node_modules/bootstrap-datepicker/dist/js/bootstrap-datepicker.js', ['client']);
});
