const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');
const apiServer = require('../routesHandler');
const should = chai.should();
const expect = chai.expect;
chai.use(chaiHttp);

describe('get request to buy data', () => { 
    it('it should successfully get the buy page and receive a http 200 status code', (done) => {
        chai.request(apiServer) 
        .get('/buy') 
        .end((err, res) => { 
            res.should.have.status(200); 
            res.body.should.be.a("object") 
            res.body.should.have.property("success")
            res.body.should.have.property("message")
            res.body.success.should.eql(true) 
            res.body.message.should.eql("all good")
            expect(res.body.cryptoData).to.be.an('array') 
            done() 
        })
    })
})

describe('post request to buy data with empty crypto', () => { 
    it('it should successfully post the empty crypto and valid quantity to backend and receive a http 400 status code', (done) => {
        const test_buy = {
            crypto: "",
            quantity: 10,
        }
        chai.request(server) 
        .post('/buy') 
        .send(test_buy)
        .end((err, res) => {
            res.body.should.be.a("object")
            res.body.should.have.property("error")
            res.body.should.have.property("message")
            res.body.message.should.eql("At least one field is empty") 
            expect(res).to.have.status(400) 
            done() 
        })
    })
})

describe('post request to buy data with empty quantity', () => { 
    it('it should successfully post the empty quantity and valid crypto to backend and receive a http 400 status code', (done) => {
        const test_buy = {
            crypto: "test",
            quantity: "",
        }
        chai.request(server) 
        .post('/buy') 
        .send(test_buy)
        .end((err, res) => {
            res.body.should.be.a("object")
            res.body.should.have.property("error")
            res.body.should.have.property("message")
            res.body.message.should.eql("At least one field is empty") 
            expect(res).to.have.status(400) 
            done() 
        })
    })
})

describe('post request to buy data with empty fields', () => { 
    it('it should successfully post the empty crypto and quantity to backend and receive a http 400 status code', (done) => {
        const test_buy = {
            crypto: "",
            quantity: "",
        }
        chai.request(server) 
        .post('/buy') 
        .send(test_buy)
        .end((err, res) => {
            res.body.should.be.a("object")
            res.body.should.have.property("error")
            res.body.should.have.property("message")
            res.body.message.should.eql("At least one field is empty") 
            expect(res).to.have.status(400) 
            done() 
        })
    })
})
