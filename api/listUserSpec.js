const frisby = require('frisby');
var payloads = require('../resources/payloads.json');
var apiUrls = require('../resources/apiUrl.json');


it('should GET: LIST USERS', function () {
    return frisby.get(apiUrls.listUser)
    .expect('status', payloads.okStatus)
    .expect('header', 'Content-Type', /application\/json/);
});

it('should GET: SHOW SINGLE USER', function () {
    var showApiUrl = apiUrls.showUser +"/"+ payloads.showUserId;
    return frisby.get(showApiUrl)
    .expect('status', 200)
    .expect('header', 'Content-Type', /application\/json/)
    .then(function (res) {      
        var resObj = JSON.parse(res.body);
        expect(resObj.data.id).toBe(2);
        expect(resObj.data.email).toBe('janet.weaver@reqres.in'); // Static value compared
        expect(resObj.data.first_name).toBe('Janet');
        expect(resObj.data.last_name).toBe('Weaver');
    });
});