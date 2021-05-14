const frisby = require('frisby');
var payloads = require('../resources/payloads.json');
var apiUrls = require('../resources/apiUrl.json');
var userData = require('../resources/registrationDataProvider.json');
var using = require('jasmine-data-provider');

using(userData.registrationPayload, function(dataset) {
    fit('should POST: CREATE USER', function () {
        return frisby.post(apiUrls.createUser, dataset)
        .expect('status', payloads.createdStatus)
        .expect('header', 'Content-Type', /application\/json/)
        .expect('bodyContains', "id")
        .expect('bodyContains', "createdAt")
        .then(function (res) { 
            var resObj = JSON.parse(res.body);
            expect(resObj.name).toBe(dataset.name); 
            expect(resObj.job).toBe(dataset.job);
        });
    });
});

