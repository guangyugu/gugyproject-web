module.exports = {
    devServer: {
        port:80,
        proxy:{
            "":{
                target:'localhost:8080',
                changeOrigin: true
            }
        }
    }
}
