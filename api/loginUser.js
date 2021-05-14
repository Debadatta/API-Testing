const frisby = require('frisby');
var payloads = require('../resources/payloads.json');
var apiUrls = require('../resources/apiUrl.json');
var userData = require('../resources/testDataProvider.js');
var using = require('jasmine-data-provider');

using(userData.loginPayload, function(dataset) {
    it('should POST: Login USER with status 200', function () {
        return frisby.post(apiUrls.loginApiUrl, dataset)
        .expect('status', payloads.okStatus)
        .expect('header', 'Content-Type', /application\/json/)
        .expect("bodyContains", "token");
    });
});

using(userData.invalidLoginPayload, function(dataset) {
    it('should POST: not Login USER return with status 400', function () {
        return frisby.post(apiUrls.loginApiUrl, dataset)
        .expect('status', payloads.badRequestStatus)
        .expect('header', 'Content-Type', /application\/json/)
        .expect("bodyContains", "error");
    });
});


