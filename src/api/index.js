import axios from 'axios'
// 轮播图
// axios 请求返回的是一个promise axios是基于promise封装的ajax
// export导出 es6模块 export导出的是一个接口,不能是固定值

//提取公共的地址
// axios.defaults.baseURL = "http://localhost:3001";//本地localhost地址 本机的
axios.defaults.baseURL ="http://132.232.89.22:3000";//老师的服务器远程地址
//响应拦截  interceptors:拦截器  后端给的用响应拦截
axios.interceptors.response.use(
  res=> res.data,
  err=>{
    Promise.reject(err);
},
);
//Promise.all => axios.all所有的成功之后才会走他

//定义一个请求的方法get方法  没有调用 轮播图请求
const getBanner = () => {
  return axios.get('/banner');//返回是promise 所以getBanner返回的也会是一个promise 省略return的时候可以省略大括号
};
// const getBanner = () => 
// axios.get('/banner');省略return的时候可以省略大括号
// 首页列表的请求
const getList = () => { 
  return axios.get('/listapi')
}
//数据分页请求
const getPage = (page) => {
  // return axios.get(`./listapi?page=${page}`)写法一
  return axios.get('./listapi',{//写法二
    params:{
      page
    }
  })
}
// 导出方法getBanner  getList 还没调用 第一次写
// export {
//   getBanner,
//   getList
// }
// http://132.232.89.22:3000
// getHomeAll执行拿到的结果是数组 banner对应的数组,list对应的数组 [banner:[],list:[]]
const getHomeAll = () => {
  return axios.all([getBanner(),getList()])
} 
// promise.all返回的是promise 结果是数组
export {getHomeAll,getList,getPage}