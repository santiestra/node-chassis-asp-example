process.env.NODE_ENV = "test";

const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../../index");
const should = chai.should();

chai.use(chaiHttp);

describe("Hello", () => {
  describe("GET /hello", () => {
    it("responds 200 and the hello body", (done) => {
      chai
        .request(server)
        .get("/api/v1/hello")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.hello.should.eq("hello");
          done();
        });
    });
  });
});
