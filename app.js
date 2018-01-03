const Koa = require('koa')
const app = new  Koa()

const middle = require('./middleware')  //这里把中间件分离到middleware 的文件夹
//中间件的集合
middle(app)

app.listen(3001,()=>{
    console.log('server is running at http://localhost:3001');
})

