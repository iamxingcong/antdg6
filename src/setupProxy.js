const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/os',
    createProxyMiddleware({
      target: 'https://gw.alipayobjects.com',
      changeOrigin: true,
    })
  );
};