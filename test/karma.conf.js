//jshint strict: false
module.exports = function (config) {
    config.set({

        basePath: '../app',

        files: [
            'bower_components/angular/angular.js',
            'bower_components/angular-route/angular-route.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'bower_components/angular-resource/angular-resource.js',
            'bower_components/angular-cookies/angular-cookies.js',
            'components/**/*.js',
            'js/*.js',
            '../test/unit/*Spec.js',
            "partials/*.html"
        ],

        autoWatch: true,

        frameworks: [
            'jasmine'
        ],

        browsers: [
            'Chrome'
        ],

        plugins: [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter',
            'karma-ng-html2js-preprocessor'
        ],

        junitReporter: {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        },

        preprocessors: {
            'partials/*.html': ['ng-html2js']
        },

        ngHtml2JsPreprocessor: {
            // stripPrefix: 'partials/'
        }

    });
};
