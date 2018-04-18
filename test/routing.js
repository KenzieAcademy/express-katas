const chai = require("chai");
const { expect } = chai;
const chaiHttp = require("chai-http");
const routing = require("../katas/routing");
chai.use(chaiHttp);


describe("GET requests that return text", () => {
    describe("GET /hello", () => {
        it("should return 'Hello, World!' as text", () => {
            return chai.request(routing)
                .get("/hello")
                .then(response => {
                    expect(response).to.have.status(200);
                    expect(response.text).to.equal("Hello, World!");
                });
        });
    });

    describe("GET /bye", () => {
        it("should return 'Goodbye cruel World!' as text", () => {
            return chai.request(routing)
                .get("/bye")
                .then(response => {
                    expect(response).to.have.status(200);
                    expect(response.text).to.equal("Goodbye, cruel World!");
                });
        });
    });
});

describe("GET requests that return JSON", () => {
    describe("GET /instructors", () => {
        it("should return an array of 4 instructors ", () => {
            return chai.request(routing)
                .get("/instructors")
                .then(response => {
                    expect(response).to.have.status(200);
                    expect(response).to.be.json;
                    expect(response.body.length).to.equal(4);
                });
        });
    })
});