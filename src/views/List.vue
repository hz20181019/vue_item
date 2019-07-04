<template>
    <div class="container">列表
        <div v-for="item in list" :key="item.id">
            <!-- {{list[0]}} -->
            <van-card num="2" :price="item.price"  :title="item.name" :thumb="item.img"></van-card>
        </div>
        <div class="btn-box">
            <van-button type="primary" @click="loadmore">
                {{hasMore?"点击加载更多":"没有更多数据了"}}
            </van-button>            
        </div>
    </div>
</template>
<script>
// 在api的index.js导出getList
import {getPage} from '../api'
export default {
    data(){
        return {
            list:[],
            page:1,//默认访问第一页的数据
            hasMore:true //默认有下一页数据
        }
    },
    created(){//实例的方法
        this.getPagelist()
    },
    methods:{
        async getPagelist(){
            //前端获取第一页的数据
            let {list,hasMore} = await getPage(this.page);
            //把新请求回来的数据和原来的this.list的数据合并就可以保留所有数据
            // this.list = this.list.concat(list); es5
            this.hasMore = hasMore
            this.list = [...this.list,...list];//es6写法合并数组
            
        },
        //点击加载下一页
        loadmore(){
            //如果没有更多数据了就不在发送请求了
            if(this.hasMore==false)
            {
                return
            };
            //页数加1
            this.page = this.page+1;
            // 发送请求拿到下一页的数据
            this.getPagelist()

        }
    }
}
</script>
<style>
    .btn-box{
        text-align:center;
    }
</style>

