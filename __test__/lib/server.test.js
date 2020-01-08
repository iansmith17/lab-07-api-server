'use strict';


const { server } = require('../../lib/server.js');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('web server categories test', () => {

  let testID;

  it('should respond properly on request to /categories', () => {

    return mockRequest
      .get('/categories')
      .expect(200)
      .then(results => {
        expect(results.body.count).toBe(0);
      });

  });

  it('should respond properly on post to /categories', () => {

    return mockRequest
      .post('/categories')
      .send({name:'Test', description:'test stuff'})
      .expect(200)
      .then(results => {
        expect(results.body.name).toBe('Test');
      });
  });

  it('should respond properly on put to /categories', () => {

    return mockRequest
      .put('/categories/test')
      .expect(200)
      .then(results => {
        testID = results.body.id;
        expect(results.body.name).toBe('test');
      });
  });

  it('should respond properly on delete to /categories', () => {
    return mockRequest
      .delete(`/categories/${testID}`)
      .expect(200)
      .then(results => {
        expect(results.text).toBe('true');
      });
  });
});

describe('web server products test', () => {

  let testID;

  it('should respond properly on request to /products', () => {

    return mockRequest
      .get('/products')
      .expect(200)
      .then(results => {
        expect(results.body.count).toBe(0);
      });

  });

  it('should respond properly on post to /products', () => {

    return mockRequest
      .post('/products')
      .send({name:'Test', description:'test stuff'})
      .expect(200)
      .then(results => {
        expect(results.body.name).toBe('Test');
      });
  });

  it('should respond properly on put to /categories', () => {

    return mockRequest
      .put('/products/test')
      .expect(200)
      .then(results => {
        testID = results.body.id;
        expect(results.body.name).toBe('test');
      });
  });

  it('should respond properly on delete to /products', () => {
    return mockRequest
      .delete(`/products/${testID}`)
      .expect(200)
      .then(results => {
        expect(results.text).toBe('true');
      });
  });
});

