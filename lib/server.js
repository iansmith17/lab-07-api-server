'use strict';

const express = require('express');
const app = express();

const timestamp = require('./middleware/timestamp');
const logger = require('./middleware/logger');

const CategoriesModel = require('./models/categories');
const categories = new CategoriesModel();

const ProductsModel = require('./models/products');
const products = new ProductsModel();

app.use(express.json());

app.use(timestamp);
app.use(logger);

// -------- CATEGORIES -----------------------------------------

app.get('/categories', (req, res, next) => {
  categories.get().then(data => {
    let obj = {
      count: data.length,
      data: data,
    };
    res.json(obj);
  });
});

// Route to Create a Category
app.post('/categories', (req, res, next) => {
  categories.create(req.body).then(result => {
    res.json(result);
  });
});

app.put('/categories/:name', (req, res, next) => {
  categories.get().then(data => {
    let entry = req.body;
    let exists = false;

    for(let i = 0; i < data.length; i++) {
      if(data[i].name !== req.params.name) {
        continue;
      } else {
        exists = true;
        entry.id = data[i].id;
        categories.update(data[i].id, entry).then(result => {
          res.json(result);
          next();
        });
      }
    }

    if(!exists) {
      entry.name = req.params.name;
      categories.create(entry).then(result => {
        res.json(result);
      });
    }
  });
});

app.delete('/categories/:id', (req, res, next) => {
  categories.delete(req.params.id).then(result => {
    res.json(result);
  });
});

// -------- PRODUCTS ---------------------------------------

app.get('/products', (req, res, next) => {
  products.get().then(data => {
    let obj = {
      count: data.length,
      data: data,
    };
    res.json(obj);
  });
});

// Route to Create a Category
app.post('/products', (req, res, next) => {
  products.create(req.body).then(result => {
    res.json(result);
  });
});

app.put('/products/:name', (req, res, next) => {
  products.get().then(data => {
    let entry = req.body;
    let exists = false;

    for(let i = 0; i < data.length; i++) {
      if(data[i].name !== req.params.name) {
        continue;
      } else {
        exists = true;
        entry.id = data[i].id;
        products.update(data[i].id, entry).then(result => {
          res.json(result);
          next();
        });
      }
    }

    if(!exists) {
      entry.name = req.params.name;
      products.create(entry).then(result => {
        res.json(result);
      });
    }
  });
});

app.delete('/products/:id', (req, res, next) => {
  products.delete(req.params.id).then(result => {
    res.json(result);
  });
});

app.get('*', (req, res, next) => {
  res.status(404).send('Page not found');
});

app.use(function(err, req, res, next) {
  console.error(err);
  res.status(500).send('Internal server error');
});

// Don't listen if imported into tests
function start(port) {
  let PORT = port || 8080;
  app.listen(PORT, () => console.log(`Listening on ${PORT}`));
}

module.exports = { 
  server: app,
  start: start,
};
