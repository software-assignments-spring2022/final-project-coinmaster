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
            res.body.should.have.property("error")
            res.body.should.have.property("message")
            res.body.message.should.eql("username is required")
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
            res.body.should.have.property("error")
            res.body.should.have.property("message")
            res.body.message.should.eql("your name is required") 
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
            res.body.should.have.property("error")
            res.body.should.have.property("message")
            res.body.message.should.eql("password is required") 
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
            res.body.should.have.property("error")
            res.body.should.have.property("message")
            res.body.message.should.eql("must enter password again") 
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
            res.body.should.have.property("error")
            res.body.should.have.property("message")
            res.body.message.should.eql("passwords must match")  
            expect(res).to.have.status(400)
            done() 
        })
    })
})

describe('post request to register page with short passwords', () => { 
    it('it should successfully post all the register fields including the short password to backend and receive a http 400 status code', (done) => {
        const test_user = {
            user_name: "test",
            your_name: "test",
            password: "test",
            confirm_password: "test",
            email: "test@test.com",
        }
        chai.request(server) 
        .post('/register') 
        .send(test_user)
        .end((err, res) => {
            res.body.should.be.a("object")
            res.body.should.have.property("error")
            res.body.should.have.property("message")
            res.body.message.should.eql("password must be at least 8 characters")  
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
            res.body.should.have.property("error")
            res.body.should.have.property("message")
            res.body.message.should.eql("email is required") 
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
            res.body.should.have.property("error")
            res.body.should.have.property("message")
            res.body.message.should.eql("email must be valid") 
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
            res.body.should.have.property("user")  
            res.body.success.should.eql(true) 
            res.body.message.should.eql("login success") 
            done() 
        })
    })
})

describe('post request to buy data with all fields', () => { 
    it('it should successfully post the crypto and quantity to backend and receive a http 200 status code', (done) => {
        const test_buy = {
            crypto: "BTC",
            quantity: 5,
            user: 'unittest',
        }
        chai.request(server) 
        .post('/buy') 
        .send(test_buy)
        .end((err, res) => { 
            res.should.have.status(200); 
            res.body.should.be.a("object") 
            res.body.should.have.property("success")
            res.body.success.should.eql(true) 
            res.body.message.should.eql("Congratulations, you purchased 5 units of BTC") 
            done() 
        })
    })
})

describe('post request to buy data with invalid coin', () => { 
    it('it should successfully post the invalid crypto to backend and receive a http 200 status code', (done) => {
        const test_buy = {
            crypto: "DOESNOTEXIST",
            quantity: 5,
            user: 'unittest',
        }
        chai.request(server) 
        .post('/buy') 
        .send(test_buy)
        .end((err, res) => { 
            res.should.have.status(200); 
            res.body.should.be.a("object") 
            res.body.should.have.property("success")
            res.body.success.should.eql(false) 
            res.body.message.should.eql("That is not a valid coin") 
            done() 
        })
    })
})

// //portfolio
//TESTING FROM PORTFOLIO ROUTE
describe('post request to portfolio page', () => { 
    it('it should successfully post to portfolio route and receive a http 200 status code', (done) => {
        const test_portfolio = {
            user: 'unittest',
        }
        chai.request(server) 
        .post('/portfolio')
        .send(test_portfolio)
        .end((err, res) => { 
            res.should.have.status(200);
            done()
        })
    })
})

describe('post request to sell data with all fields', () => { 
    it('it should successfully post the crypto and quantity to backend and receive a http 200 status code', (done) => {
        const test_sell = {
            crypto: "BTC",
            quantity: 5,
            user: 'unittest',
        }
        chai.request(server) 
        .post('/sell') 
        .send(test_sell)
        .end((err, res) => { 
            res.should.have.status(200); 
            res.body.should.be.a("object") 
            res.body.should.have.property("success")
            res.body.success.should.eql(true) 
            res.body.message.should.eql("Congratulations, you sold 5 units of BTC") 
            done() 
        })
    })
})

describe('post request to login page with empty username', () => { 
    it('it should successfully post the empty username to backend and receive a http 400 status code', (done) => {
        const test_user = {
            user_name: "",
            password: "testtest",
        }
        chai.request(server) 
        .post('/login') 
        .send(test_user)
        .end((err, res) => {
            res.body.should.be.a("object") 
            res.body.should.have.property("error")
            res.body.should.have.property("message")
            res.body.message.should.eql("username is required") 
            expect(res).to.have.status(400)
            done() 
        })
    })
})

describe('post request to login page with empty password', () => { 
    it('it should successfully post the empty password to backend and receive a http 400 status code', (done) => {
        const test_user = {
            user_name: "unittest",
            password: "",
        }
        chai.request(server) 
        .post('/login') 
        .send(test_user)
        .end((err, res) => {
            res.body.should.be.a("object")
            res.body.should.have.property("error")
            res.body.should.have.property("message")
            res.body.message.should.eql("password is required")  
            expect(res).to.have.status(400)
            done() 
        })
    })
})

describe('post request to login page with empty fields', () => { 
    it('it should successfully post the empty username and password to backend and receive a http 400 status code', (done) => {
        const test_user = {
            user_name: "",
            password: "",
        }
        chai.request(server) 
        .post('/login') 
        .send(test_user)
        .end((err, res) => {
            res.body.should.be.a("object")
            res.body.should.have.property("error")
            res.body.should.have.property("message")
            res.body.message.should.eql("username is required")  
            expect(res).to.have.status(400)
            done() 
        })
    })
})

describe('post request to login page with incorrect username', () => { 
    it('it should successfully post the incorrect username and password to backend and receive a http 400 status code', (done) => {
        const test_user = {
            user_name: "ThisUserNameDoesNotExist",
            password: "testtest",
        }
        chai.request(server) 
        .post('/login') 
        .send(test_user)
        .end((err, res) => {
            res.body.should.be.a("object")
            res.body.should.have.property("error")
            res.body.should.have.property("message")
            res.body.message.should.eql("username does not exist")  
            expect(res).to.have.status(400)
            done() 
        })
    })
})

describe('post request to login page with incorrect password', () => { 
    it('it should successfully post the incorrect username and password to backend and receive a http 400 status code', (done) => {
        const test_user = {
            user_name: "unittest",
            password: "wrongpassword",
        }
        chai.request(server) 
        .post('/login') 
        .send(test_user)
        .end((err, res) => {
            res.body.should.be.a("object")
            res.body.should.have.property("error")
            res.body.should.have.property("message")
            res.body.message.should.eql("incorrect password")  
            expect(res).to.have.status(400)
            done() 
        })
    })
})