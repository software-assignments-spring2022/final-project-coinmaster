const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');
const should = chai.should();
const expect = chai.expect;
chai.use(chaiHttp);

describe('post request to buy data with all fields', () => { 
    it('it should successfully post the crypto and quantity to backend and receive a http 200 status code', (done) => {
        const test_buy = {
            crypto: "test",
            quantity: 5,
        }
        chai.request(server) 
        .post('/buy') 
        .send(test_buy)
        .end((err, res) => { 
            res.should.have.status(200); 
            res.body.should.be.a("object") 
            res.body.should.have.property("success")
            res.body.success.should.eql(true) 
            res.body.message.should.eql("buy data post success") 
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
            expect(res).to.have.status(400) 
            done() 
        })
    })
})
