'use strict';

module.exports = {
    registrationPayload: {
        "user1": { "name": "morpheus",  "job": "leader" },
        "user2": { "name": "debadatt",  "job": "leader" }
    },
    updatePayload: {
        "user1": {"name": "John",  "job": "contractor"}
    },
    loginPayload: {
        "validUser": {"email": "eve.holt@reqres.in",  "password": "cityslicka"}        
    },
    invalidLoginPayload: {
        "inValidUser": {"email": "eve.holt@reqres.in",  "password": ""}        
    }
}