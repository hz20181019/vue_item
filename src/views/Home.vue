<template>
  <div class="home">
      <div class="container">
        <Banner :swiperSlides="sliders"/>
        <!-- <div class="products" v-for="item in lists" :key="item.id">        
          <img :src="item.img"/>
          <p>{{item.name}}</p>
          <p>{{item.price}}</p>
          <p>{{item.info}}</p>
        </div> -->
        <div>
          <ul class="homelist">
            <li v-for="item in homelist" :key="item.id">
              <img :src="item.img" alt="">
              <p>{{item.name}}</p>
              <p>{{item.price}}</p>
              <p>{{item.info}}</p>
            </li>
          </ul>
        </div>
        <div>
          
        </div>
      </div>
  </div>
</template>

<script>
//引入组件
import Banner from '../components/Banner'
// import { getBanner } from '../api'
// console.log(xxx);
// import {getBanner,getList} from '../api'//方法一  import _,{getBanner} from '../api' 这是默认导出
// // import * as obj from '../api'//方法二 obj.getBanner
// // console.log(obj.getBanner.toString());
// //结果：function getBanner() {
// //   return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/banner');
// // }
// import List from '../views/List'
// import {getList} from '../api' 
import {getHomeAll} from '../api'
export default {
  name: 'home',
    created(){//ajax异步 越早发送越好 一般放created周期
    // getBanner().then(data=>{
    //   console.log(data);
    //   //8000访问3000 存在跨域问题
    // })//方法一
    // obj.getBanner().then(data=>{
    //   console.log(data);
    // // })//方法二 把所有属性挂载一个对象身上
    // this.getSlider();
    // // this.getList();//实例上的方法
    // this.getL();
    this.getAll();
  },
  data(){
    return{
      sliders:[],
      // lists:[]
      homelist:[]
    }
  },
  //template中的data要写成函数
  components: {
    Banner,
    // List
  },
  methods:{
    //轮播图请求
    // async getSlider(){
    //   //promise异常处理  try  catch
    //   try{
    //     let {banner} = await getBanner();
    //     this.sliders = banner;
    //   }
    //   catch(err){
    //     console.log(err);
    //   }
    
    // },//异步好处不用.then 
    //lists请求
    // async getList(){
    // let {list} = await getList();
    // this.lists= list;
    // console.log(this.lists);
    // }  await + promsie整体是promise的执行结果 是对象
    // async getL(){     
    //   try{
    //      // await getList()//拿的是api的getList
    //   let {list} = await getList();//结果是后端返回的数据
    //   // console.log(res)//{code: 200, list: Array(10)}
    //   // 把拿回来的数据挂载到list上
    //   this.homelist = list;
    //   }
    //   catch(err){
    //     console.log(error);
    //   }
    // }
    async getAll(){
      //多个请求完成之后把数据集合到一起
      let [{banner},{list}]=await getHomeAll();
      this.sliders = banner;
      this.homelist = list;
      // let res = await getHomeAll();
      // res = [{code:200,banner:[]},{code:200,list:[]}]

    }
  }
}
</script>
<style scoped>
  .homelist{  
    width:100%;  
    display:flex;
    flex-wrap:wrap;
  }
  
  .homelist li{
    width:50%;
    padding-top:20px;
    list-style:none;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
  }
  .homelist li p{
    margin-top:10px;
  }

  .homelist li img{
    width:80%;
    border-radius: 5px;
  }

</style>

