<template>
    <div class="container">
            <van-list v-model="loading"  :finished="finished" finished-text="没有更多了"   :error.sync="error"
  error-text="请求失败，点击重新加载"  @load="onLoad" :immediate-check="false">
                <div v-for="item in list" :key="item.id">
                    <!-- 访问后的结果http://localhost:8080/detail/4 ，访问/list1-->
                    <!-- 方法一 只可以用path-->
                    <router-link :to="{path:`/detail/${item.id}`}" tag="i">
                    <!-- 方法二  缺点：只可以用name -->
                    <!-- <router-link :to="{name:'detail',params:{id:item.id}}"> -->
                        <!-- <router-link :to="{name:'detail',query:{id:item.id}}"> -->
                        <van-card num="2" :price="item.price"    :desc="item.info"  
                        :title="item.name"
                        :thumb="item.img">
                        </van-card>
                    </router-link>
                </div>
            </van-list>
    </div> 
</template>
<script>
import {getPage} from '../api'
export default {
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      page:1,
      hasMore:true,
      error:true
    };
  },
  created(){
      this.getL();
  },
  methods: {
    async getL(){
        try{
            let {list,hasMore} =  await getPage(this.page);
            // console.log(list);
            this.hasMore = hasMore;
            this.list = [...this.list,...list];
            
            console.log(this.hasMore)
            if(this.hasMore==false){
            // alert(1);
            //加载状态结束
            this.loading = false;
            // 数据加载完成
            this.finished = true;            
        }
        }
        catch(e){
            this.error = true;
        }      
    },  
    //点击加载下一页
    loadmore(){
            // //如果没有更多数据了就不在发送请求了
            // if(this.hasMore==false)
            // {
            //     this.loading = false;
            //     this.finished = true;//数据全部加载完成
            // };
            //页数加1
            this.page = this.page+1;
            // 发送请求拿到下一页的数据
            this.getL();
    },
    onLoad() {
        // setTimeout(()=>{
           
        // },1000)
        this.loadmore()
    },
  }
}
// 
</script>

