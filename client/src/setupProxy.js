const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
  app.use(
    ['/api/forecast/*', '/api/search_result/*'],
    createProxyMiddleware({
      target: 'http://localhost:5000',
    })
  );
};
