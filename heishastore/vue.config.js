module.exports = {
    css: {
        loaderOptions: {
            css: {
                // options here will be passed to css-loader
            },
            postcss: {
                // options here will be passed to postcss-loader
                plugins: [require('postcss-px2rem')({
                    remUnit: 100, //设计稿的 十分之一
                    propList: ['*', '!border'],
                    "exclude": /node_modules/i
                })]
            }
        }
    }
};