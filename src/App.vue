<template>
  <div id="app">
    <!-- 3.用标签的形式使用 -->
    <Nav/>
    <router-view/>
  </div>
</template>

<script>
// 1.引入组件
import Nav from './components/Nav.vue'
// 2.注册组件
export default {
  components:{
    Nav
  }
}
</script>

<style>
  .container{
    position:fixed;
    top:0;
    bottom:58px;
    width:100%;
    overflow-y:scroll;
    /* 超出滚动 */
  }
  ul,li{
    list-style:none;
  }
  *{
    padding:0;
    margin:0;
  }
  a {
    text-decoration: none;
    color:#333;
    text-align:center;
  }
</style>
