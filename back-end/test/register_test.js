const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const should = chai.should();
chai.use(chaiHttp);

// describe('post request to register page with all correct fields', () => { 
//     it('it should successfully post all the register fields to backend and receive a http 200 status code', (done) => {
//         const test_user = {
//             user_name: "test",
//             your_name: "test",
//             password: "test",
//             confirm_password: "test",
//             email: "test@test",
//         }
//         chai.request(server) 
//         .post('/register') 
//         .send(test_user)
//         .end((err, res) => { 
//             res.should.have.status(200); 
//             res.body.should.be.a("object") 
//             res.body.should.have.property("user_name")
//             res.body.should.have.property("your_name")
//             res.body.should.have.property("password")
//             res.body.should.have.property("confirm_password") 
//             res.body.should.have.property("email") 
//             res.body.user_name.should.eql(test_user.user_name)
//             res.body.your_name.should.eql(test_user.your_name) 
//             res.body.password.should.eql(test_user.password) 
//             res.body.confirm_password.should.eql(test_user.confirm_password)  
//             res.body.email.should.eql(test_user.email) 
//             done() 
//         })
//     })
// })

// describe('post request to register page with empty fields', () => { 
//     it('it should successfully post all the empty register fields to backend and receive a http 400 status code', (done) => {
//         const test_user = {
//             user_name: "",
//             your_name: "",
//             password: "",
//             confirm_password: "",
//             email: "",
//         }
//         chai.request(server) 
//         .post('/register') 
//         .send(test_user)
//         .end((err, res) => { 
//             res.should.have.status(400); 
//             res.body.should.be.a("object") 
//             res.body.should.have.property("user_name")
//             res.body.should.have.property("your_name")
//             res.body.should.have.property("password")
//             res.body.should.have.property("confirm_password") 
//             res.body.should.have.property("email") 
//             res.body.user_name.should.eql(test_user.user_name)
//             res.body.your_name.should.eql(test_user.your_name) 
//             res.body.password.should.eql(test_user.password) 
//             res.body.confirm_password.should.eql(test_user.confirm_password)  
//             res.body.email.should.eql(test_user.email) 
//             done() 
//         })
//     })
// })

// describe('post request to register page with unmatched passwords', () => { 
//     it('it should successfully post all the register fields to backend and receive a http 400 status code', (done) => {
//         const test_user = {
//             user_name: "test",
//             your_name: "test",
//             password: "test",
//             confirm_password: "unmatched",
//             email: "test@test",
//         }
//         chai.request(server) 
//         .post('/register') 
//         .send(test_user)
//         .end((err, res) => { 
//             res.should.have.status(400); 
//             res.body.should.be.a("object") 
//             res.body.should.have.property("user_name")
//             res.body.should.have.property("your_name")
//             res.body.should.have.property("password")
//             res.body.should.have.property("confirm_password") 
//             res.body.should.have.property("email") 
//             res.body.user_name.should.eql(test_user.user_name)
//             res.body.your_name.should.eql(test_user.your_name) 
//             res.body.password.should.eql(test_user.password) 
//             res.body.confirm_password.should.eql(test_user.confirm_password)  
//             res.body.email.should.eql(test_user.email) 
//             done() 
//         })
//     })
// })