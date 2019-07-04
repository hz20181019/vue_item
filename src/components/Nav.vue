<template>
     <div id="nav">
      <router-link to="/" exact>
        <i class="iconfont icon-meiriyicai"></i>
        <span>首页</span>      
      </router-link>      
      <router-link to="/list">
        <i class="iconfont icon-icon"></i>
        <span>列表</span>
      </router-link>       
      <router-link to="/cart">
         <i class="iconfont icon-liebiao"></i>
         <span>购物车</span>
      </router-link>      
      <router-link to="/profile">
        <i class="iconfont icon-add"></i>
        <span>个人中心</span>
      </router-link>     
    </div>
</template>
<style>
    #nav{
      position:fixed;
      display: flex;
      bottom:0;
      width:100%;
      z-index:100;
      height:58px;
      border-top:1px solid #e3e3e3; 
      justify-content: center;
      align-items: center; 
      background: #fff;
    }
    #nav a{
        flex:1;
        /* 占一份 */
        flex-direction: column;
        display:flex;
        text-align:center;
    }
    #nav a i{
        font-size:26px;
    }
    a.router-link-active{
        color:red;
    }

</style>

