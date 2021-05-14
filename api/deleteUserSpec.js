const frisby = require('frisby');
var payloads = require('../resources/payloads.json');
var apiUrls = require('../resources/apiUrl.json');


it('should DELETE: DELETE USER', function () {
    var deleteApiUrl = apiUrls.deleteUser +"/"+ payloads.deleteUserId;
    return frisby.delete(deleteApiUrl)
    .expect('status', payloads.deleteStatus)
    .inspectJSON();
});