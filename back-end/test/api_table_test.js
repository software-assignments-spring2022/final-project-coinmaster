const chai = require('chai');
const chaiHttp = require('chai-http');
const apiServer = require('../routesHandler');
const should = chai.should();
const expect = chai.expect;
chai.use(chaiHttp);

// TESTING FROM BUY ROUTE
describe('get request to get API data with all fields from API', () => { 
    it('it should successfully get the crypto and quantity to backend and receive a http 200 status code', (done) => {
        const test_buy = {
            crypto: "Bitcoin",
            quantity: "5",
            cryptoData: "allCoins",
            status: 'all good',
        }
        chai.request(apiServer) 
        .get('/buy') 
        .query(test_buy)
        .end((err, res) => { 
            res.should.have.status(200); 
            res.body.should.be.a("object")
            res.body.should.have.property("success")
            res.body.should.have.property("cryptoData")
            res.body.success.should.eql(true)
            expect(res.body.cryptoData).to.be.an('array')
            done() 
        })
    })
})

// TESTING FROM SELL ROUTE
describe('get request to get API data with all fields from API', () => { 
    it('it should successfully get the crypto and quantity to backend and receive a http 200 status code', (done) => {
        const test_buy = {
            crypto: "Bitcoin",
            quantity: "5",
            cryptoData: "allCoins",
            status: 'all good',
        }
        chai.request(apiServer) 
        .get('/sell') 
        .query(test_buy)
        .end((err, res) => { 
            res.should.have.status(200); 
            res.body.should.be.a("object")
            res.body.should.have.property("success") 
            res.body.should.have.property("cryptoData")
            res.body.success.should.eql(true)
            expect(res.body.cryptoData).to.be.an('array')
            done() 
        })
    })
})