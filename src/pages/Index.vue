<template>
  <div id="container">
    <div class="content-wrapper">
      <section class="content">
        <router-view></router-view>
      </section>
    </div>
    <footer>
      <p>© {{year}} 作者-师峰</p>
    </footer>
  </div>
</template>
<script>

export default {
  name: 'Index',
  data() {
    return {
      msg: 'Hello Vue!'
    };
  },
  computed: {
    year() {
      return this.GetDate(0);
    }
  },
  mounted() {
  },
  methods: {
    GetDate(AddDayCount) {
      const dd = new Date();
      dd.setDate(dd.getDate() + AddDayCount);
      const y = dd.getFullYear();
      return y;
    }
  },
  components: {
  }
};
</script>

<style lang="stylus">
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
    /* top: 0; */
    right: 0;
    left: 0;
    border-left: 0;
    padding: 0;

    p {
      text-align: center;
    }
  }
}
</style>
