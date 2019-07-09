<template>
   <button @click="ck">
       {{msg}}
   </button>
</template>

<script>
export default {
    data(){
        return{
            msg:"这是我的按钮"
        }
    },
    methods:{
        ck(){
            console.log('1234');//点击按钮触发这个事件
        }
    }
}
</script>

<style>

</style>