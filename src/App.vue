<template>
  <div id="app">
    <transition name="trans" mode="out-in">
       <router-view style="background: red"></router-view>
    </transition>

    <ul class="bottom">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/list">List</router-link></li>
      <li><router-link to="/contents">Contents</router-link></li>
    </ul>
  </div>
</template>

<script>
  import fastclick from 'fastclick'


export default {
  name: 'app',
  data () {
    return {

    }
  },mounted: function () {

    fastclick.attach(this.$el)
  }
}
</script>

<style>
@import "assets/css/base.css";
@import "assets/css/mobile_h5.css";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;height:100%;

}
  .bottom{
    width: 100%;height:80px;position: fixed;
    bottom:0;left:0;
  }
  .bottom>li{
    float: left;width: 33.3333%;height:100%;
  }
  .bottom>li>a{
    display: block;width: 100%;height:100%;
    text-align: center;line-height: 80px;background: #f0f0f0;
  }
  .trans-enter{
    transform:translateX(100%);
  }
  .trans-enter-to{
    transform:translateX(0);
  }
  .trans-leave{
    transform:translateX(0);
  }
  .trans-leave-to{
    transform:translateX(-100%);
  }
  .trans-enter-active,.trans-leave-active{
    transition: all .3s;
  }
</style>
