const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../App');
const should = chai.should();
const expect = chai.expect;
chai.use(chaiHttp);

// TESTING FROM PORTFOLIO ROUTE