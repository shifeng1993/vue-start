<template>
  <div id="container">
    <div class="content-wrapper ng-scope">
      <section class="content">
        <router-view></router-view>
      </section>
    </div>
    <footer class="main-footer">
      <p class="center-block text-center ng-binding">© {{year}} 作者-师峰</p>
    </footer>
  </div>
</template>
<script>
  export default {
    name: 'Index',
    data () {
      return {
        msg: 'Hello Vue!'
      }
    },
    computed: {
      // contentWarpperMinHeight () {
      //   if (window.screen < 768) {
      //     let minHeight = window.screen.height * 0.82
      //     return minHeight
      //   } else {
      //     let minHeight = window.screen.height * 1.46
      //     return minHeight
      //   }
      // },
      year () {
        return this.GetDate(0)
      }
    },
    mounted () {
    },
    methods: {
      GetDate (AddDayCount) {
        let dd = new Date()
        dd.setDate(dd.getDate() + AddDayCount)
        const y = dd.getFullYear()
        return y
      }
    },
    components: {
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  #container {
    height: 100%;
    overflow: auto;
    .content-wrapper {
      border-left: 0;
      overflow-x: hidden;
    }
    footer {
      position: fixed;
      bottom: 0;
      /*top: 0;*/
      right: 0;
      left: 0;
      border-left: 0;
      padding: 0;
      p {
        margin: 0 0 0;
      }
    }
  }
</style>
