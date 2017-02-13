var expect = require("chai").expect;
var request = require('supertest');
var server = require('../server');

describe('api.categories', function () {
    it('call /categories should return Array of categories', function (done) {
        request(server)
            .get('/api/categories')
            .expect(200)
            .end((err, res)=> {
                if(err) return done(err);
                expect(res.body).to.be.instanceOf(Array);
                done();
            });
    });
});