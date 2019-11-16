<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
        watch:{
            '$route':function(to,from){
　　　　　　　　　　 document.body.scrollTop = 0;
                 document.documentElement.scrollTop = 0; 
           }
        }
    };
</script>

<style>

</style>
