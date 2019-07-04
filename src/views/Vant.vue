<template>
    <div>
        <van-cell title="单元格" value="内容" />
        <van-button type="default" @click="btnclick">默认按钮</van-button>
        <van-button type="primary" @touchstart="btntouch">主要按钮</van-button>
        <van-button type="info">信息按钮</van-button>
        <van-button type="warning">警告按钮</van-button>
        <van-button type="danger" size="mini">危险按钮</van-button>
        <van-card num="2" price="2.00" desc="描述信息" title="商品标题" thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"/>
            
    </div>
</template>
<script>
export default {
    methods:{
        btnclick(){
            alert(1);
        },
        btntouch(){
            alert("摸我")
        }
    }
}
</script>
