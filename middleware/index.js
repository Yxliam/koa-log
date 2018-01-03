const router = require('../router')
const nunjucks = require('koa-nunjucks-2')  //视图
const bodyParse = require('koa-bodyparser')   //解析post数据
const static = require('koa-static')
const path = require('path')
const jsonFormat = require('./jsonFormat')
const logger = require('./mi-log')
const ip  = require('ip')

module.exports = (app)=>{
    app.use(static(path.resolve(__dirname,'../public')))  //path.resolve 返回的是一个绝对路径
    app.use(nunjucks({
        ext:'html',
        path:path.join(__dirname,'../views'),  //制定视图目录
        nunjucksConfig:{
            trimBlocks:true  //开启转义  防Xss
        }
    }))

    app.use(logger({
        env:app.env,  //koa 提供环境变量
        appLogLevel:'debug',
        dir:'logs',
        serverIp:ip.address()
    }))    
    app.use(bodyParse())
    app.use(jsonFormat())
    
    app.use(router.routes())
        .use(router.allowedMethods())
}
