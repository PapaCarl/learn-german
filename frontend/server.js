// server.js
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use(jsonServer.bodyParser);

server.use((req, res, next) => {
  if (req.method === 'POST') {
    req.body.createdAt = Date.now();
    if(req.path === '/login') {
      console.log(req.body);
      return res = 'test';
    }
  }
  // Continue to JSON Server router
  next()
})

server.use(router);
server.listen(3000, () => {
  console.log('JSON Server is running')
});
