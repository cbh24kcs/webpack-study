const path = require('path')
// CommonJS 模块化规范，因为这里是node脚本

// webpack配置对象
module.exports = {
    // 模式 development, production
    mode: 'development',
    // 入口，即你要打包谁
    entry: './src/main.js', 
    // 出口，即打包之后的东西输出到哪
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bao.js'
    },
    module: {
        // 模块打包规则配置
        rules: [
            {
                // 匹配所有以 .css 结尾的文件
                test: /.css$/, 
                use: ['style-loader', 'css-loader']
            }
        ]
    }
}


