<template>
    <div class="home">
      <div class="balloons">
          <div class="ball">
            <img src="../../img/upload_panel.png" alt="">
          </div>
      </div>
    </div>
</template>

<script>
  import $ from "jquery"
    export default {
        name: "home",
      data(){
          return {

          }
      },
      methods:{

      },
    }
</script>

<style scoped>
    .home{
      width: 100%;height:100%;
      position: relative;
    }
    .balloons{
      width: 100%;height:100%;
    }
  .ball{
    position: absolute;width: 40px;height:80px;
    top:50px;left:150px;animation: updown infinite 1s ease-in-out;
  }
  @keyframes updown {
    0%{
      top:50px;
    }
    50%{
      top:40px;
    }
    100%{
      top:50px;
    }
  }
  .ball>img{
    width: 100%;height:100%;
  }
</style>
