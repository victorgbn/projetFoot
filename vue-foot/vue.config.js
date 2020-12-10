const path = require('path')

module.exports = { 
    outputDir: path.resolve(__dirname, '../project/public'),
    devServer: { 
        proxy: {
            '/api':{
                target: 'http://localhost:8000'
            }
            // 'api/v1/json/':{
            //     target : 'https://www.thesportsdb.com'
            // }
        }
    }
}