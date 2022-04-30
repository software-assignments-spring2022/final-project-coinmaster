const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');
const should = chai.should();
const expect = chai.expect;
chai.use(chaiHttp);

// // TESTING FROM PORTFOLIO ROUTE
// describe('get request to portfolio page', () => { 
//     it('it should successfully get the message from backend on portfolio route and receive a http 200 status code', (done) => {
//         chai.request(server) 
//         .get('/portfolio') 
//         .end((err, res) => { 
//             res.should.have.status(200);
//             done() 
//         })
//     })
// })