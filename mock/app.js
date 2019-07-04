//express 框架 基于node开发的框架 相当于原生js和jq
// express把node封装了一下
let express = require("express");//引入express
const cors = require("cors")
const app = express()//会自动创建一个服务器
const fs = require("fs").promises;//文件操作
const path = require("path");//路径
function readList(filename){
    filename = path.resolve(__dirname,filename)//取到文件的绝对路径
    return fs.readFile(filename,'utf-8').then(data=>{
        return JSON.parse(data);
    })
}
// readList('list.json').then(data=>{
//     console.log(data);
// })
app.listen(3000);
app.use(cors());
// 轮播图接口 3001/bannner
let banner = require('./banner')
app.get('/banner',(req,res)=>{
    // res.json({banner:[1,2,3,4]})
    res.json({code:200,banner})//banner属性名和属性值一样可以省略
})
// app.后面跟着的get post表示前端发送过来的请求方式
// 参数1：请求路径 必须加/  /a  /b 写banner是为了语义化
// 参数2：回调函数 有请求和响应
// 轮播图接口 3000/listapi
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
