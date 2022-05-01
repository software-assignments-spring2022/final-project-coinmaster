const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../App');
const should = chai.should();
const expect = chai.expect;
chai.use(chaiHttp);

// TESTING FROM PORTFOLIO ROUTE
// describe('get request to portfolio page', () => { 
//     it('it should failed to get the portfolio route without login and receive a http 400 status code', (done) => {
//         chai.request(server) 
//         .get('/portfolio') 
//         .end((err, res) => { 
//             res.should.have.status(400);
//             done() 
//         })
//     })
// })