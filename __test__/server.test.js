"use strict";

const { server } = require("../index.js");
const supertest = require("supertest");
const mockRequest = supertest(server);

describe("web server", () => {
  it("should respond properly on request to /categories", () => {
    return mockRequest
      .get("/categories")
      .expect(200)
      .then(results => {
        expect(results.body.count).toBe(0);
      });
  });

  it("should respond properly on post to /categories", () => {
    return mockRequest
      .post("/categories")
      .send({ name: "Test", description: "test stuff" })
      .expect(200)
      .then(results => {
        expect(results.body.name).toBe("Test");
      });
  });
});

// describe('web server', () => {
//   it('should return 404 for missing path', () => {
//       return mockRequest
//           .get('/404')
//           .expect(404);
//   });
// it('should return 200 for home page', () => {
//   return mockRequest
//   .get('/')
//   .expect(200);
// });

// it('should return an empty list from /categories', () => {
//   return mockRequest
//   .get('/categories')
//   .expect(200)
//   .expect([])
//   .expect('content-type', 'application/json; charset=utf-8')

// });

// it('should create category from POST', () => {
//   return mockRequest
//   .post('/categories')
//   .send({ name: 'Electronics'})
//   .expect(201)
//   .then(response => {
//       return mockRequest
//       .get('/categories')
//       .expect(200)
//       .then(getResponse => {
//           expect(getResponse.body)
//           .toHaveProperty('length',1);

//           expect(getResponse.body[0])
//           .toHaveProperty('name' , 'electronics');
//           expect(getResponse.body[0])
//           .toHaveProperty('id');
//       })
//   })
// })
// });