<template>
    <div class="pullre">
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <div v-for="item in list" :key="item.id">
                <van-card num="2" :price="item.price"  :title="item.name" :thumb="item.img"></van-card>
            </div>
        <!-- <p>刷新次数: {{ count }}</p> -->
        </van-pull-refresh>
    </div>
</template>
<script>
import { getPage } from '../api'
export default {
      data() {
        return {
        count: 0,
        isLoading: false,
        list:[],
        page:1,
        hasMore:true,
        error:true
    }
  },
 created(){
     this.getP();
 }, 
  methods: {
       async getP(){
            try{      
                let {list,hasMore} = await getPage(this.page);
                this.hasMore = hasMore;
                // this.list = [...this.list,...list];
                this.list = this.list.concat(list);
                }
                catch(e){
                    this.error = true;
                }      
            }, 
            loadmore(){
                    this.page = this.page+1;
                    // 发送请求拿到下一页的数据
                    this.getP();
            },
            onRefresh() {
                setTimeout(() => {
                    this.$toast('刷新成功');
                    this.isLoading = false;
                    this.count++;
                    this.loadmore()
                }, 500);
            }, 
        }
}
</script>
