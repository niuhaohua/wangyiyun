const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');

module.exports = {
    lintOnSave: false, //关闭eslint检查
    devServer: {
        proxy: {
            '/x/web-interface': {
                target: "https://api.bilibili.com",
                changeOrigin: false,
                secure: false,
                // pathRewrite: {
                //     '/api': '/'
                // }
            }
        }
    },

    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    autoprefixer({
                        overrideBrowserslist: [
                            "Android 4.1",
                            "iOS 7.1",
                            "Chrome > 31",
                            "ff > 31",
                            "ie >= 8"
                        ]
                    }),
                    
                    pxtorem({
                        rootValue: 37.5,
                        propList: ['*'],
                    })
                ]
            }
        }
    },
    // publicPath: "./" //需要配置 否则打包后的apk文件安装在手机可能白屏
}