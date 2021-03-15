const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
    // app.use(createProxyMiddleware(`/api`, {
    //     target: "http://localhost:3000",
    //     changeOrigin: true,
    //     pathRewrite: {
    //         "^/api": ""
    //     }
    // })),
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://localhost:1236',
            changeOrigin: true,
            pathRewrite: {
                '^/api': '',
            }
        })
    );
    app.use(
        '/api2',
        createProxyMiddleware({
            target: 'http://localhost:3006',
            changeOrigin: true,
            pathRewrite: {
                '^/api2': '',
            }
        })
    );

}