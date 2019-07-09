<template>
    <div class="container" ref="sclele" @scroll="scmore">列表
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
import { setTimeout, clearTimeout } from "timers";
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
    mounted(){
        // console.log(this.$el.querySelector('.btn-box'));
        //<div class="btn-box"></div>
        // console.log(this.$refs.sclele);
        //<div class="container"></div>
        console.dir(this.$refs.sclele);
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

        },
        scmore(){
            //节流和防抖 节流(优化性能用的)
            // 没隔一段时间发送一次请求,优化性能用的,输入会根据输入的时间发送请求
                // console.log(1);
                clearTimeout(this.timer);
                this.timer = setTimeout(()=>{
                // console.log(2);//打印的2比1次数少  点击加载更多次数少了
                let sclele = this.$refs.sclele;
                // let scrollTop = sclele.scrollTop;
                // let scrollHeight = sclele.scrollHeight;
                // let scrollHeight = sclele.clientHeight;
                let {scrollTop,scrollHeight,clientHeight} = sclele;
                console.log(scrollTop,scrollHeight,clientHeight);
                //判断到底部加载更多
                if(clientHeight + scrollTop + 20 > scrollHeight) {
                    // console.log('我到底部了')
                    this.loadmore();
                }
                },13)    
                // _.debounce(func, [wait=0], [options={}]) 
        }
    }
}
</script>
<style>
    .btn-box{
        text-align:center;
    }
</style>

