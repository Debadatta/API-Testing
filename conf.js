var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
exports.config = {
    
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    //specs: ['global.js', 'specs/AdditionSpec.js' ],
    specs: ['api/updateUserSpec.js', 'api/userSpec.js', 'api/listUserSpec.js', 
    'api/createUserSpec.js', 'api/loginUser.js'],

    onPrepare: function() {
        jasmine.getEnv().addReporter(
          new Jasmine2HtmlReporter({
            savePath: 'target/reports',
            screenshotsFolder: ""
          })
        );
     }
    
    }