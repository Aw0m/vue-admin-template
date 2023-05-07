module.exports = {
    devServer: {
        hot: true,
        port: 8001,
        host: "0.0.0.0",
        proxy: 'https://localhost:8888'
    },
    publicPath: './',
}
