module.exports = {
    index:async (ctx,next)=>{
        ctx.log.error('有错误哦')
      await ctx.render('home/index')
    },
    home:async(ctx,next)=>{
           
            ctx.send({code:200,msg:'ok'})
    }
}