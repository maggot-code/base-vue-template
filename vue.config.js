/*
 * @Author: maggot-code
 * @Date: 2020-12-22 22:26:52
 * @LastEditors: maggot-code
 * @LastEditTime: 2020-12-29 14:29:01
 * @Description: file content
 */
const resolves = dir => require('path').join(__dirname, dir)
module.exports = {
    publicPath: './',
    outputDir: 'dist', // 打包输出目录
    assetsDir: 'static',
    filenameHashing: true,
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = process.env.VUE_APP_TITLE
                return args
            })
        config.resolve.alias
            .set('@', resolves('src'))
    },
    configureWebpack: config => {
        // 调试JS
        if (process.env.NODE_ENV === 'dev') {
            config.devtool = 'source-map'
        }
    },
    css: {
        // 查看CSS属于哪个css文件
        sourceMap: process.env.NODE_ENV === 'dev'
    },
    devServer: {
        https: false,
        open: false,
        proxy: {
            '/api/v1': {
                target: process.env.VUE_APP_BASE_URL,
                ws: true,
                secure: false,
                changeOrigin: true,
                pathReWrite: { '^/api/v1': '' }
            },
        }
    }
}
