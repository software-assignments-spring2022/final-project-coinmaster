const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');
const should = chai.should();
chai.use(chaiHttp);

describe('post request to register page with all correct fields', () => { 
    it('it should successfully post all the register fields to backend and receive a http 200 status code', (done) => {
        const test_user = {
            user_name: "test",
            your_name: "test",
            password: "test",
            confirm_password: "test",
            email: "test@test",
        }
        chai.request(server) 
        .post('/register') 
        .send(test_user)
        .end((err, res) => { 
            res.should.have.status(200); 
            res.body.should.be.a("object") 
            res.body.should.have.property("success")
            res.body.should.have.property("message") 
            res.body.success.should.eql(true) 
            res.body.message.should.eql("register success") 
            done() 
        })
    })
})

describe('post request to register page with empty fields', () => { 
    it('it should successfully post all the empty register fields to backend and receive a http 400 status code', (done) => {
        const test_user = {
            user_name: "",
            your_name: "",
            password: "",
            confirm_password: "",
            email: "",
        }
        chai.request(server) 
        .post('/register') 
        .send(test_user)
        .end((err, res) => { 
            res.should.have.status(400); 
            res.body.should.be.a("object") 
            res.body.should.have.property("success")
            res.body.should.have.property("message") 
            res.body.success.should.eql(false) 
            res.body.message.should.eql("At least one field is empty") 
            done() 
        })
    })
})

describe('post request to register page with unmatched passwords', () => { 
    it('it should successfully post all the register fields to backend and receive a http 400 status code', (done) => {
        const test_user = {
            user_name: "test",
            your_name: "test",
            password: "test",
            confirm_password: "unmatched",
            email: "test@test",
        }
        chai.request(server) 
        .post('/register') 
        .send(test_user)
        .end((err, res) => { 
            res.should.have.status(400); 
            res.body.should.be.a("object") 
            res.body.should.have.property("success")
            res.body.should.have.property("message") 
            res.body.success.should.eql(false) 
            res.body.message.should.eql("passwords do not match") 
            done() 
        })
    })
})