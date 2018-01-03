module.exports = ()=>{
    function render(json){
        this.set("Content-Type","application/json")
        this.body = JSON.stringify(json)
    }
    return async(ctx,next)=>{
        //调用ctx.send 方法的时候 转义json
        ctx.send = render.bind(ctx)
        await next()
    }
}