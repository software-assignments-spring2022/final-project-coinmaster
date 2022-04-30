const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');
const should = chai.should();
const expect = chai.expect;
chai.use(chaiHttp);

describe('post request to register page with all correct fields', () => { 
    it('it should successfully post all the register fields to backend and receive a http 200 status code', (done) => {
        const test_user = {
            user_name: "unittest",
            your_name: "unittest",
            password: "testtest",
            confirm_password: "testtest",
            email: "test@test.com",
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
            res.body.message.should.eql("register info successfully saved to database") 
            done() 
        })
    })
})

describe('post request to register page with empty username', () => { 
    it('it should successfully post the empty username along with other register fields to backend and receive a http 400 status code', (done) => {
        const test_user = {
            user_name: "",
            your_name: "unittest",
            password: "testtest",
            confirm_password: "testtest",
            email: "test@test.com",
        }
        chai.request(server) 
        .post('/register') 
        .send(test_user)
        .end((err, res) => { 
            res.body.should.be.a("object")
            expect(res).to.have.status(400)
            done() 
        })
    })
})

describe('post request to register page with empty your name', () => { 
    it('it should successfully post the empty your name along with other register fields to backend and receive a http 400 status code', (done) => {
        const test_user = {
            user_name: "unittest",
            your_name: "",
            password: "testtest",
            confirm_password: "testtest",
            email: "test@test.com",
        }
        chai.request(server) 
        .post('/register') 
        .send(test_user)
        .end((err, res) => { 
            res.body.should.be.a("object")
            expect(res).to.have.status(400)
            done() 
        })
    })
})

describe('post request to register page with empty password', () => { 
    it('it should successfully post the empty password along with other register fields to backend and receive a http 400 status code', (done) => {
        const test_user = {
            user_name: "unittest",
            your_name: "unittest",
            password: "",
            confirm_password: "testtest",
            email: "test@test.com",
        }
        chai.request(server) 
        .post('/register') 
        .send(test_user)
        .end((err, res) => { 
            res.body.should.be.a("object")
            expect(res).to.have.status(400)
            done() 
        })
    })
})

describe('post request to register page with empty confirm password', () => { 
    it('it should successfully post the empty confirm password along with other register fields to backend and receive a http 400 status code', (done) => {
        const test_user = {
            user_name: "unittest",
            your_name: "unittest",
            password: "testtest",
            confirm_password: "",
            email: "test@test.com",
        }
        chai.request(server) 
        .post('/register') 
        .send(test_user)
        .end((err, res) => { 
            res.body.should.be.a("object")
            expect(res).to.have.status(400)
            done() 
        })
    })
})

describe('post request to register page with unmatched passwords', () => { 
    it('it should successfully post all the register fields including the unmatched passwords to backend and receive a http 400 status code', (done) => {
        const test_user = {
            user_name: "test",
            your_name: "test",
            password: "testtest",
            confirm_password: "unmatched",
            email: "test@test.com",
        }
        chai.request(server) 
        .post('/register') 
        .send(test_user)
        .end((err, res) => {
            res.body.should.be.a("object") 
            expect(res).to.have.status(400)
            done() 
        })
    })
})

describe('post request to register page with empty email', () => { 
    it('it should successfully post the empty email along with other register fields to backend and receive a http 400 status code', (done) => {
        const test_user = {
            user_name: "unittest",
            your_name: "unittest",
            password: "testtest",
            confirm_password: "testtest",
            email: "",
        }
        chai.request(server) 
        .post('/register') 
        .send(test_user)
        .end((err, res) => { 
            res.body.should.be.a("object")
            expect(res).to.have.status(400)
            done() 
        })
    })
})

describe('post request to register page with incorrect email format', () => { 
    it('it should successfully post the incorrect email along with other register fields to backend and receive a http 400 status code', (done) => {
        const test_user = {
            user_name: "unittest",
            your_name: "unittest",
            password: "testtest",
            confirm_password: "testtest",
            email: "test",
        }
        chai.request(server) 
        .post('/register') 
        .send(test_user)
        .end((err, res) => { 
            res.body.should.be.a("object")
            expect(res).to.have.status(400)
            done() 
        })
    })
})

//login part
describe('post request to login page with all fields', () => { 
    it('it should successfully post the username and password to backend and receive a http 200 status code', (done) => {
        const test_user = {
            user_name: "unittest",
            password: "testtest",
        }
        chai.request(server) 
        .post('/login') 
        .send(test_user)
        .end((err, res) => { 
            res.should.have.status(200); 
            res.body.should.be.a("object") 
            res.body.should.have.property("success")
            res.body.should.have.property("message") 
            res.body.success.should.eql(true) 
            res.body.message.should.eql("login success") 
            done() 
        })
    })
})

//portfolio
// TESTING FROM PORTFOLIO ROUTE
describe('get request to portfolio page', () => { 
    it('it should successfully get the message from backend on portfolio route and receive a http 200 status code', (done) => {
        chai.request(server) 
        .get('/portfolio') 
        .end((err, res) => { 
            res.should.have.status(200);
            done() 
        })
    })
})


describe('post request to login page with empty username', () => { 
    it('it should successfully post the empty username and password to backend and receive a http 400 status code', (done) => {
        const test_user = {
            user_name: "",
            password: "testtest",
        }
        chai.request(server) 
        .post('/login') 
        .send(test_user)
        .end((err, res) => {
            res.body.should.be.a("object") 
            expect(res).to.have.status(400)
            done() 
        })
    })
})

describe('post request to login page with empty password', () => { 
    it('it should successfully post the empty username and password to backend and receive a http 400 status code', (done) => {
        const test_user = {
            user_name: "unittest",
            password: "",
        }
        chai.request(server) 
        .post('/login') 
        .send(test_user)
        .end((err, res) => {
            res.body.should.be.a("object") 
            expect(res).to.have.status(400)
            done() 
        })
    })
})

