## 一、知识点
### 一)package.json 的作用(了解)
node_modules:文件夹 放着我们项目的依赖
dependencies 依赖
devDependencies (开发依赖) 写代码的时候需要用,打包的时候不需要
npm install 其实走的就是依赖
-scripts 脚本 npm run serve
-name 项目名称,version:版本号
### 二）路由懒加载 (掌握2,3)
路由懒加载
1./* webpackChunkName: "about" */ 可以给懒加载模块起名
2.import() 表示懒加载,es6的语法 不加括号是正常的语法  ***
会把js拆分成一个一个的模块
3.路由懒加载的写法 (跳转到当前路由才去加载组件)
component:()=>import('./views/Home.vue') 改善性能 不访问不会加载当前的组件何时访问何时加载
4.路由重定向使用redirect
### 三）局部组件引入流程
1.用import 标签导入
2.在components里面注册
3.用标签的形式使用
### 四)路由激活样式(了解)  点击之后会加上这个样式   (掌握exact的使用)
router-link-exact-active
router-link-active
router-link  exact属性:确切严格的匹配
### 五) es6的module import export(掌握)
-import 导入  往里拿
#export 表示导出 export 导出的是一个接口,导出的不能是具体值
    错误示例：
    export 1
    let a = 1
    let b = 2 
    export {
        a:1,
        b:2
    }

    正确写法:
    let a = 1
    let b = 2
    export{a,b}   a是一个接口,b是一个接口
    import {getBanner} from '../api' 自动查找index.js作为默认入口
    等价于import {getBanner} from '../api/index.js'

    import * as obj from '../api'//方法二
      obj.getBanner().then(data=>{
      console.log(data);
    })//方法二 把所有属性挂载一个对象身上

    --见到export import有2种引入写法
    //a.js
    export {a,b}
    //b.js 
    第一种写法(解构赋值)
    import {a} from 'a.js' //直接使用a
    第二种写法(全挂载到一个对象上面)
    import * as  type from 'a.js' //使用type.a
--import 导入的变量 在顶级作用域 不能被更改
#export default 默认导出 后面跟具体的值
a.js 导出
export default 1
b.js 引用
import xxx from 'a.js'b.js


<!-- 跨域解决方式 cors 跨域资源共享 后端设请求头
npm install cors 跨域的包
let cors = require("cors")
app.use(cors())
jsonp只可以用get请求 -->

### 六) async await 异步的终极解决方案(掌握)
--async 后面必须跟函数 表示函数里面有异步操作
--await 后面通常跟promise(也可以跟普通值)
跟promise表示promise的执行结果

### 七) 组件化的好处 (了解)
1.可复用
2.便于维护
3.可组合

### 八) axios  在请求或响应被 then 或 catch 处理前拦截它们 (掌握)
-axios.defaults.baseURL 抽离公共的url路径
-axios.interceptors.response.use()  响应拦截器  interceptors:拦截器
-axios.interceptors.request.use()   请求拦截器
### 九) try catch异常捕获 不会影响后面的代码执行
try{
    要执行的代码
}
catch(err){
    console.log(err);//捕获到的异常
}
### 十) style标签加scoped 表示样式只对当前组件生效

    overflow-y:scroll;
    /* 超出滚动 */
### 十一) Promise.all 和 axios.all
- 用法: 所有的promisez成功之后才会走all里面的成功


### 十二)路由重定向
-redirect
## 二、流程*******
### 三)项目的目录结构
- mock 如果自己写模拟数据创建mock文件夹
- src
  - views 页面级组件
  - libs 格式化时间 判断是不是数组 工具类 until.isArray 放公共需要的工具
  - components 基础组件/公共组件     放轮播图和导航
  - api 放ajax请求 (里面可以放多个文件) 自己新建的
    - index.js
- public
### 四) 项目的页面 首页 列表 购物车 个人中心 详情页
1) app.vue 配置router-link  a标签对应的导航  就是配置导航
2) views 里面建页面组件 List.vue  Cart.vue Profile.vue Detail.vue
3)配置路由和导航
router-link 等于a标签 href
### 三)首页
1)抽离导航变成单独组件  components新建NaV.vue  基础组件/公共组件
2)引入本地css 在assets文件夹中
远程link引入和本地引入  本地引入是网址然后新建一个css文件夹这是图片css
3)轮播图 components建立Banner.vue
4)props传值 子组件定义props
接收数据的是子组件,传递数据的是父组件
5)使用轮播图组件  
npm install vue-awesome-swiper --save mock文件夹下
--main.js
import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default global options } */)
### 四) axios的使用流程 src/api/index.js
npm install axios --save        在vue_review文件夹中
1)api/index.js 导出请求的方法
定义请求方法
const getBanner = () => {
  return axios.get('/banner')
};
const getList = () => {
  return axios.get('/list')
}
// 导出方法getBanner  getList 还没调用
export {
  getBanner,
  getList
}
2)哪个组件使用就在哪个组件引入
import {getBanner,getList} from '../api' //对象的解构赋值
3)再引入的组件里面进行调用
getBanner()
getList()
函数执行它才会发送请求
请求的方法:和async和await效果一致
  getBanner().then(data=>{console.log(data);},err=>{
       let {banner} = data;
       this.sliders = banner;
    })
promise异常处理  try  catch   
一般代码有错误后面代码不执行了
try catch好处:代码有错不会影响后续代码的执行
而且可以捕获异常





### vue ui 库vant的使用
1.下载 npm i vant -S
2.建一个Vant.vue的组件
3.导入全部组件 main.js
main.js引入样式
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
在路由router.js配置vant.vue
 {
      path: '/vant',
      name: 'vant',
      component:()=>import('./views/Vant.vue')
},
测试用8080/#/vant  哈西模式 
单独访问要自己加上哈西值直接跳转的他会自动加上



### mock接口 vue.config.js配置数据
1.在根目录下面建立vue.config.js
只要一修改就要重启项目,但是不存在跨域问题
配置数据需要改动的时候重新启动 npm run serve
把app.js里的内容复制过去就行

##http://132.232.89.22:3000访问的是远程地址  
写在config.js中不用每一次都启动node但是修改一次就要重启一下项目,但是不存在跨域，可以直接访问localhost:8080/list   localhost:8080/banner

#若是在mock-app.js中写则访问的是3000端口 存在跨域但是不用修改一下就重启项目
app.js:访问  http://132.232.89.22:3000/listapi
两个名称不要命名一样的否则会冲突

### 四、 mock接口
1)和src同级建立mock文件夹(独立)文件夹(放在其他外面也可以)
mock(放mock数据) mock中建立app.js banner.js list.json
app.js:放服务器文件
banner.js:放轮播图图片
list.js:放商品列表
2)express使用:
    - npm install express 下载express
    (vuecli创建的项目中不用下,因为vuecli是基于webpack的,webpack自带了express)
写轮播图接口
app.js:
创建express服务器:
    let express = require("express");//引入express
    let app = express()//会自动创建一个服务器
    app.listen(3000) 服务器端口号
    ctrl + ~  输出--右键空白处:stop code run 停止终端运行

## getName => get-name 通过js 相互转换
<!-- 相互转换 -->


###前端 服务端   服务端主要是和前端进行通信
服务端 -->返回数据--前端

api-index.js中发送axios请求 请求数据--服务端 导出
axios.get('http://localhost:3000/banner')  

前端 -->请求数据


### 分页接口逻辑
20条数据 ->一次拿5条  点击加载下一页的时候在拿5条
第一次拿数组的 slice截取数据 包前不包后
[1,2,3,4,5].slice(0,4)---》截取到4
第一次 0-5: 0*5+5

第二次5-10: 1*5+5
第三次10-15 2*5+5
第四次15-20 3*5+5
0,1,2,3作为每一页的参数  0->第一页的数据
1->第二页的数据
2->第三页的数据
3->第四页的数据
localhost:3000/list/page=1 访问第一页
localhost:3000/list/page=2 访问第二页
localhost:3000/list/page=3 访问第三页
所有的分页都是点击加一

####添加购物车 接口地址：'/addcar' 请求方式：post 参数：Object 参数名称 是否必须 参数说明 id 是 商品id name 是 商品名称 info 否 商品详情 img 否 商品图片 返回值： code int 200 成功 code int 201-203 失败 msg string 成功失败的信息


#####记住项目一定要启动mock - node app.js启动端口 

##工作流程
1.开会讨论需求 (产品经理,后端主管,前端主管,ui,需求方...)
2.产品经理-->原型图和需求文档 原型图就是(草图-->有功能) 需求文档 
    1>点击列表页的商品跳转到详情页
    2>ui出设计图
    3>前端根据设计图(原型图) 后端接口 写页面和逻辑
    4>后端根据(原型图)和前端讨论制定接口风格    返回对象还是数组啊？{list:[]}   [{list:[]}]
    5>运维 负责部署服务器的
有的公司只有3 和 4,别的省略了

项目流程
一 . 开会讨论需求 (产品，前端主管，后端主管，需求方)
二. 产品经理画原型图（草图 功能） 写需求文档 
三. ui做设计图 -  前后端（产品经理）讨论接口风格 
四. 前端根据设计图和原型图 以及接口 写页面和逻辑 
    后端根据原型图 写接口 
五. 测试 有有没bug 流程能不能跑的通 
六. 运维把项目部署到服务器 


项目：
     1. 项目简介（项目是做什么的）区块链 c2c的商城  
     2. 负责模块 购物车模块 订单模块  
     3. 使用的技术 




file:///C:/windows/system32/drivers/etc/hosts 网址查看127.0.0.1
hosts：
# Copyright (c) 1993-2009 Microsoft Corp.
#
# This is a sample HOSTS file used by Microsoft TCP/IP for Windows.
#
# This file contains the mappings of IP addresses to host names. Each
# entry should be kept on an individual line. The IP address should
# be placed in the first column followed by the corresponding host name.
# The IP address and the host name should be separated by at least one
# space.
#
# Additionally, comments (such as these) may be inserted on individual
# lines or following the machine name denoted by a '#' symbol.
#
# For example:
#
#      102.54.94.97     rhino.acme.com          # source server
#       38.25.63.10     x.acme.com              # x client host

# localhost name resolution is handled within DNS itself.
#	127.0.0.1       localhost
#	::1             localhost

	
	127.0.0.1       www.hanjing.com
    访问网页：
    1.DNS解析
    ping www.baidu.com

网络设置高级-查看TCP/IP
       

   ##### windows查看自己的ip?       

    1.隐藏的属性？
    这台电脑文件夹-查看-隐藏的项目打上对勾
    2.cls:清除写的所有的命令行
    3.ping www.baidu.com判断是否有网络？
    4.地址栏直接输入的是get请求
    5.一个电脑是一台服务器
    6.cmd命令行中输入 ipconfig查看本机的ip  

    一个网页打开到显示的流程？
    浏览器渲染到网页的流程(面试题)**** 作业总结出来  纸质版的


    对于我而言，发起 “1+1等于几”的询问后

1. 若5s内没有收到回复，则认为网络不通

2. 若收到回复，则我确认①我能听到她的消息 ②她能听到我的消息，然后回复她的问题的答案


对于她而言，当感觉网络情况不对的时候

1. 若没有收到我的询问，则她发起询问

2. 若收到“1+1等于几”，则她确认 ①她可以听到我的消息，然后回复我的问题的答案和她的问题“2，2+2等于几”

3. 若5s内没有收到我的回复“4”，则她确认 ②我听不见她的消息

4. 若5s内收到了我的回复“4”，则她确认 ②我可以听见她的消息

这样，如果上面的对话得以完成，就证明双方都可以确认自己可以听到对方的声音，对方也可以听到自己的声音！

这个故事可以解释TCP为什么要三次握手吗 ... 





 
	
call和apply bind的区别
路由的两种格式

请求响应渲染页面