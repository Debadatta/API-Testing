const frisby = require('frisby');
var payloads = require('../resources/payloads.json');
var apiUrls = require('../resources/apiUrl.json');

var userData = require('../resources/testDataProvider.js');
var using = require('jasmine-data-provider');


using(userData.updatePayload, function(dataset){
    it('should PUT: UPDATE USER', function () {
        var updateApiUrl = apiUrls.updateUser +"/"+ payloads.updateUserId;
        return frisby.put(updateApiUrl,  dataset)
        .expect('status', payloads.okStatus)
        .expect('header', 'Content-Type', /application\/json/)
        .expect('bodyContains', "updatedAt")
        .then(function (res) {  
            var resObj = JSON.parse(res.body);
            expect(resObj.name).toBe(dataset.name);
            expect(resObj.job).toBe(dataset.job);
        });
    });
});