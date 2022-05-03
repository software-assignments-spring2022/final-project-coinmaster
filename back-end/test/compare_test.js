const chai = require('chai');
const chaiHttp = require('chai-http');
const apiServer = require('../routesHandler');
const should = chai.should();
const expect = chai.expect;
chai.use(chaiHttp);

describe('get request to compare', () => {
    it('it should successfully get the compare page and receive a http 200 status code', (done) => {
        chai.request(apiServer) 
        .get('/compare') 
        .end((err, res) => { 
            res.should.have.status(200); 
            res.body.should.be.a("object") 
            res.body.should.have.property("messages")
            res.body.should.have.property("names")
            expect(res.body.names).to.be.an('array')
            done() 
        })
    })
})