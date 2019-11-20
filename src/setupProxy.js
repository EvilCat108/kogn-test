const proxy = require("http-proxy-middleware");

module.exports = app => {
  app.use(
    "/add",
    proxy({
      target: "http://localhost:3002",
      changeOrigin: true
    })
  );
};
