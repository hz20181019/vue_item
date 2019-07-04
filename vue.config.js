const banner = require("./mock/banner")
const fs = require("fs").promises;//文件操作
const path = require("path");//路径
function readList(filename){
    filename = path.resolve(__dirname,filename)//取到文件的绝对路径
    return fs.readFile(filename,'utf-8').then(data=>{
        return JSON.parse(data);
    })
}
readList('./mock/list.json').then(data=>{
    console.log(data);
})
module.exports={
    devServer:{
        before(app){
            //不存在跨域了就 localhost:8080/banner
            // http://localhost:8080/#/banner
            app.get('/banner',(req,res)=>{
                res.json({
                    code:200,
                    banner
                });
            });
            app.get('/listapi',(req,res)=>{
                let {page} = req.query;//前端传过来的页数 page=1里面的 1 2 3 
                readList("list.json").then(data=>{
                    let maxData = 5 //表示每次拿几条数据
                    page = page - 1; //1-->0  2-->1
                    //data是list.json里面拿到的数组
                    let pagedata = data.slice(page*5,(page+1)*5)
                    // page*5+5====>(page+1)*5
                    //如果数据没有了 需要告诉前端 
                    //(page+1)*5 大于数组的length 表示没有更多数据了
                    // 例如:我只有8条数据 传的是1  2*5=10>8没有数据了定义一个是否有更多数据的变量
                    const hasMore = !((page+1)*5>=data.length);
                    if(!isNaN(Number(page))){
                        //如果有page 证明是分页获取
                        res.json({
                            code:200,
                            list:pagedata,
                            hasMore,
                        })
                    }
                    else{
                        res.json({
                            code:200,
                            list:data,
                           
                        })
                    }
                   
                })
            })
            

        },
    },
};
// vue是webpack搭建的,自带webpack