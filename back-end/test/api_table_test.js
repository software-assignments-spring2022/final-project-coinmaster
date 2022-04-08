const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');
const should = chai.should();
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
        chai.request(server) 
        .get('/buy') 
        .query(test_buy)
        .end((err, res) => { 
            res.should.have.status(200); 
            res.body.should.be.a("object") 
            res.body.should.have.property("crypto")
            res.body.should.have.property("quantity")
            res.body.should.have.property("cryptoData")
            res.body.should.have.property("status")
            res.body.cryptoData.should.have.property("symbol")
            res.body.cryptoData.should.have.property("name")
            res.body.cryptoData.should.have.property("price")
            res.body.cryptoData.should.have.property("rank")
            res.body.cryptoData.should.have.property("market_cap")
            res.body.success.should.eql(true) 
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
        chai.request(server) 
        .get('/sell') 
        .query(test_buy)
        .end((err, res) => { 
            res.should.have.status(200); 
            res.body.should.be.a("object") 
            res.body.should.have.property("crypto")
            res.body.should.have.property("quantity")
            res.body.should.have.property("cryptoData")
            res.body.should.have.property("status")
            res.body.cryptoData.should.have.property("symbol")
            res.body.cryptoData.should.have.property("name")
            res.body.cryptoData.should.have.property("price")
            res.body.cryptoData.should.have.property("rank")
            res.body.cryptoData.should.have.property("market_cap")
            res.body.success.should.eql(true) 
            done() 
        })
    })
})