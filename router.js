const router = require('koa-router')()
const HomeController = require('./controller/home')  //分离逻辑代码

    router.get('/',HomeController.index)
    router.get('/home/:hid',HomeController.home)
    //路由需要 use才能生效 
    
module.exports = router