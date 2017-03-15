<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style lang="scss">
  #app {
    overflow-x: hidden;
    overflow-y: auto;
  }

  #app,
  body,
  html {
    height: 100%;
    width: 100%;
    overflow: hidden;
  }

  .fl {
    float: left;
  }

  .fr {
    float: right;
  }

  button,
  input,
  select,
  textarea {
    outline: none;
  }

  /*以下是插件css*/
  /*.tooltip {*/
    /*display: none;*/
    /*opacity: 0;*/
    /*transition: opacity .15s;*/
    /*pointer-events: none;*/
    /*padding: 8px;*/
    /*z-index: 10000;*/
  /*}*/

  /*.tooltip .tooltip-content {*/
    /*background: black;*/
    /*color: white;*/
    /*border-radius: 16px;*/
    /*padding: 5px 10px 4px;*/
  /*}*/

  /*.tooltip.tooltip-open-transitionend {*/
    /*display: block;*/
  /*}*/

  /*.tooltip.tooltip-after-open {*/
    /*opacity: 1;*/
  /*}*/
</style>
