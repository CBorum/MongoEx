/**
 * Created by ChristopherBorum on 12/09/16.
 */
var mongo = require('../db/db.js')
    , assert = require('assert');

describe('db', () => {
    describe('mongodb', () => {
        if ('should connect to db', () => {
            mongo.init((error) => {
                assert.equal(null, error)
            })
        });
    })
});