<template>
    <div>
        组件refs的基本用法
        <!-- 使用组件 -->
        <MyButton ref="btn">
              
        </MyButton>
    </div>
</template>

<script>
//引入组件
import MyButton from '../components/Mybutton'
//注册组件
export default {
    components:{
        MyButton
    },
    mounted(){
        let btn = this.$refs.btn;//子组件 button组件的this
        btn.msg = '按钮1';//不是双向数据绑定的值 改值一般用不到
        console.log(btn.msg);
        console.log(btn);
        this.$refs.btn.ck()
        // this是按钮组件
        // 通过子组件触发(拿到)父组件的事件
        // demo是父组件
    }
    
}
</script>
