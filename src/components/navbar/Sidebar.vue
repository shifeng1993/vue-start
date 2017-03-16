<template>
  <aside class="main-sidebar">
    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">
      <!-- sidebar menu: : style can be found in sidebar.less -->
      <ul class="sidebar-menu">
        <li class="header">菜单</li>
        <li :class="{active: currentTab=='home.dashboard'}">
          <a>
            <i class="fa fa-dashboard"></i><span>仪表台</span>
            <small class="label pull-right bg-green">new</small>
          </a>
        </li>
        <li :class="{'active': currentTab=='machine'}"
            class="treeview">
          <a @click="machineBtn">
            <i class="fa fa-fax"></i>
            <span>设备管理</span>
            <i class="fa fa-angle-left pull-right"></i>
          </a>
          <transition name="slide-fade">
            <ul class="treeview-menu" v-show="show.machine">
              <li :class="{'active': currentItem=='machineType'}">
                <a @click="gotoMachineType"><i class="fa fa-cog"></i>机器类型</a>
              </li>
              <li :class="{'active': currentItem=='machineAisle'}">
                <a @click="gotoAisleTemplate"><i class="fa fa-table"></i>货道模板</a>
              </li>
              <li :class="{'active': currentItem=='machineList'}">
                <a @click="gotoMachineList"><i class="fa fa-android"></i>设备列表</a>
              </li>
              <li :class="{'active': currentItem=='machineMap'}">
                <a @click="gotoMachineMap"><i class="fa fa-map-marker"></i>设备地图</a>
              </li>
              <li :class="{'active': currentItem=='machineCopy'}">
                <a @click="gotoMachineCopy"><i class="fa fa-copy"></i>设备复制</a>
              </li>
            </ul>
          </transition>
        </li>
        <li :class="{'active': currentTab=='promotion'}"
            class="treeview">
          <a @click="promotionBtn">
            <i class="fa fa-shopping-cart"></i>
            <span>促销管理</span>
            <i class="fa fa-angle-left pull-right"></i>
          </a>
          <transition name="slide-fade">
            <ul class="treeview-menu" v-show="show.promotion">
              <li :class="{'active': currentItem=='promotionDesc'}">
                <a @click="gotoPromotionDesc"><i class="fa fa-th-large"></i>促销描述</a>
              </li>
              <li :class="{'active': currentItem=='promotionList'}">
                <a @click="gotoPromotionList"><i class="fa fa-list"></i>促销活动</a>
              </li>
            </ul>
          </transition>
        </li>
        <li :class="{'active': currentTab=='advertise'}"
            class="treeview">
          <a @click="advertiseBtn">
            <i class="fa fa-list-alt"></i> <span>广告管理</span>
            <i class="fa fa-angle-left pull-right"></i>
          </a>
          <transition name="slide-fade">
            <ul class="treeview-menu" v-show="show.advertise">
              <li :class="{'active': currentItem=='advertiseList'}">
                <a @click="gotoAdvertise"><i class="fa fa-list-alt"></i>广告资源</a>
              </li>
              <li :class="{'active': currentItem=='advertisePush'}">
                <a @click="gotoFinishPushAdvertise"><i class="fa fa-desktop"></i>已推送广告</a>
              </li>
            </ul>
          </transition>
        </li>
        <li :class="{'active': currentTab=='report'}"
            class="treeview">
          <a @click="reportBtn">
            <i class="fa fa-bar-chart"></i> <span>报表管理</span>
            <i class="fa fa-angle-left pull-right"></i>
          </a>
          <transition name="slide-fade">
            <ul class="treeview-menu" v-show="show.report">
              <li :class="{'active': currentItem=='reportList'}">
                <a @click="gotoOrderList"><i class="fa fa-bar-chart"></i>订单列表</a>
              </li>
              <li :class="{'active': currentItem=='reportFill'}">
                <a @click="gotoFillGoodsList"><i class="fa fa-area-chart"></i>补货统计</a>
              </li>
              <li :class="{'active': currentItem=='reportProfit'}">
                <a @click="gotoProfitReport"><i class="fa fa-line-chart"></i>利润统计</a>
              </li>
            </ul>
          </transition>
        </li>
        <li :class="{'active': currentTab=='system'}"
            class="treeview">
          <a @click="systemBtn">
            <i class="fa fa-cogs"></i> <span>系统管理</span>
            <i class="fa fa-angle-left pull-right"></i>
          </a>
          <transition name="slide-fade">
            <ul class="treeview-menu" v-show="show.system">
              <li :class="{'active': currentItem=='systemPaytype'}">
                <a @click="gotoPayTypeList"><i class="fa fa-money"></i>支付方式</a>
              </li>
              <li :class="{'active': currentItem=='systemAndroidV'}">
                <a @click="gotoAndroidVersionList"><i class="fa fa-android"></i>安卓版本</a>
              </li>
              <li :class="{'active': currentItem=='systemGoods'}">
                <a @click="gotoGoods"><i class="fa fa-tag"></i>商品管理</a>
              </li>
              <li :class="{'active': currentItem=='systemEgocard'}">
                <a @click="gotoEgocard"><i class="fa fa-credit-card"></i>充易购卡</a>
              </li>
              <li :class="{'active': currentItem=='systemEgocardcreate'}">
                <a @click="gotoEgocardCreate"><i class="fa fa-credit-card"></i>生成易购卡</a>
              </li>
              <li :class="{'active': currentItem=='systemMercardcreate'}">
                <a @click="gotoMercardCreate"><i class="fa fa-credit-card"></i>生成商户卡</a>
              </li>
            </ul>
          </transition>
        </li>
        <li :class="{'active': currentTab=='orgtree'}">
          <a @click="gotoOrgTree">
            <i class="fa fa-university"></i><span>组织管理</span>
          </a>
        </li>
        <li :class="{'active': currentTab=='user'}">
          <a @click="gotoUserList">
            <i class="fa fa-users"></i><span>用户管理</span>
          </a>
        </li>
        <li :class="{'active': currentTab=='role'}">
          <a @click="gotoRoleList">
            <i class="fa fa-cog"></i><span>角色管理</span>
          </a>
        </li>
      </ul>
    </section>
    <!-- /.sidebar -->
  </aside>
</template>
<script>
  export default{
    name: 'NavSidebar',
    data () {
      return {
        show: {
          machine: false,
          promotion: false,
          advertise: false,
          report: false,
          system: false
        },
        currentTab: '',
        currentItem: ''
      }
    },
    mounted () {
      if (window.localStorage.currentTab) {
        if (window.localStorage.currentTab === 'machine') {
          this.show.machine = true
          this.show.promotion = false
          this.show.advertise = false
          this.show.report = false
          this.show.system = false
        } else if (window.localStorage.currentTab === 'promotion') {
          this.show.machine = false
          this.show.promotion = true
          this.show.advertise = false
          this.show.report = false
          this.show.system = false
        } else if (window.localStorage.currentTab === 'advertise') {
          this.show.machine = false
          this.show.promotion = false
          this.show.advertise = true
          this.show.report = false
          this.show.system = false
        } else if (window.localStorage.currentTab === 'report') {
          this.show.machine = false
          this.show.promotion = false
          this.show.advertise = false
          this.show.report = true
          this.show.system = false
        } else if (window.localStorage.currentTab === 'system') {
          this.show.machine = false
          this.show.promotion = false
          this.show.advertise = false
          this.show.report = false
          this.show.system = true
        }

        this.currentTab = window.localStorage.currentTab
        this.currentItem = window.localStorage.currentItem
      }
    },
    methods: {
      machineBtn () {
        if (this.show.machine === false) {
          this.show.machine = true
          this.show.promotion = false
          this.show.advertise = false
          this.show.report = false
          this.show.system = false
          this.currentTab = 'machine'
        } else {
          this.show.machine = false
          this.currentTab = ''
        }
      },
      promotionBtn () {
        if (this.show.promotion === false) {
          this.show.machine = false
          this.show.promotion = true
          this.show.advertise = false
          this.show.report = false
          this.show.system = false
          this.currentTab = 'promotion'
        } else {
          this.show.promotion = false
          this.currentTab = ''
        }
      },
      advertiseBtn () {
        if (this.show.advertise === false) {
          this.show.machine = false
          this.show.promotion = false
          this.show.advertise = true
          this.show.report = false
          this.show.system = false
          this.currentTab = 'advertise'
        } else {
          this.show.advertise = false
          this.currentTab = ''
        }
      },
      reportBtn () {
        if (this.show.report === false) {
          this.show.machine = false
          this.show.promotion = false
          this.show.advertise = false
          this.show.report = true
          this.show.system = false
          this.currentTab = 'report'
        } else {
          this.show.report = false
          this.currentTab = ''
        }
      },
      systemBtn () {
        if (this.show.system === false) {
          this.show.machine = false
          this.show.promotion = false
          this.show.advertise = false
          this.show.report = false
          this.show.system = true
          this.currentTab = 'system'
        } else {
          this.show.system = false
          this.currentTab = ''
        }
      },
      gotoMachineType () {
        this.currentItem = 'machineType'
        this.$router.push('/machine/type')
        window.localStorage.currentTab = 'machine'
        window.localStorage.currentItem = 'machineType'
      },
      gotoAisleTemplate () {
        this.currentItem = 'machineAisle'
        this.$router.push('/machine/aisle')
        window.localStorage.currentTab = 'machine'
        window.localStorage.currentItem = 'machineAisle'
      },
      gotoMachineList () {
        this.currentItem = 'machineList'
        this.$router.push('/machine/list')
        window.localStorage.currentTab = 'machine'
        window.localStorage.currentItem = 'machineList'
      },
      gotoMachineMap () {
        this.currentItem = 'machineMap'
        this.$router.push('/machine/map')
        window.localStorage.currentTab = 'machine'
        window.localStorage.currentItem = 'machineMap'
      },
      gotoMachineCopy () {
        this.$router.push('/machine/copy')
        this.currentItem = 'machineCopy'
        window.localStorage.currentTab = 'machine'
        window.localStorage.currentItem = 'machineCopy'
      },
      gotoPromotionDesc () {
        this.currentItem = 'promotionDesc'
        this.$router.push('/promotion/desc')
        window.localStorage.currentTab = 'promotion'
        window.localStorage.currentItem = 'promotionDesc'
      },
      gotoPromotionList () {
        this.currentItem = 'promotionList'
        this.$router.push('/promotion/list')
        window.localStorage.currentTab = 'promotion'
        window.localStorage.currentItem = 'promotionList'
      },
      gotoAdvertise () {
        this.$router.push('/advertise/list')
        this.currentItem = 'advertiseList'
        window.localStorage.currentTab = 'advertise'
        window.localStorage.currentItem = 'advertiseList'
      },
      gotoFinishPushAdvertise () {
        this.$router.push('/advertise/pushList')
        this.currentItem = 'advertisePush'
        window.localStorage.currentTab = 'advertise'
        window.localStorage.currentItem = 'advertisePush'
      },
      gotoOrderList () {
        this.$router.push('/report/order')
        this.currentItem = 'reportList'
        window.localStorage.currentTab = 'report'
        window.localStorage.currentItem = 'reportList'
      },
      gotoFillGoodsList () {
        this.$router.push('/report/fillGoods')
        this.currentItem = 'reportFill'
        window.localStorage.currentTab = 'report'
        window.localStorage.currentItem = 'reportFill'
      },
      gotoProfitReport () {
        this.$router.push('/report/profit')
        this.currentItem = 'reportProfit'
        window.localStorage.currentTab = 'report'
        window.localStorage.currentItem = 'reportProfit'
      },
      gotoPayTypeList () {
        this.$router.push('/system/sysPay')
        this.currentItem = 'systemPaytype'
        window.localStorage.currentTab = 'system'
        window.localStorage.currentItem = 'systemPaytype'
      },
      gotoAndroidVersionList () {
        this.$router.push('/system/sysAndroid')
        this.currentItem = 'systemAndroidV'
        window.localStorage.currentTab = 'system'
        window.localStorage.currentItem = 'systemAndroidV'
      },
      gotoGoods () {
        this.$router.push('/goods/list')
        this.currentItem = 'systemGoods'
        window.localStorage.currentTab = 'system'
        window.localStorage.currentItem = 'systemGoods'
      },
      gotoEgocard () {
        this.$router.push('/system/sysEgocard')
        this.currentItem = 'systemEgocard'
        window.localStorage.currentTab = 'system'
        window.localStorage.currentItem = 'systemEgocard'
      },
      gotoEgocardCreate () {
        this.$router.push('/system/sysEgocardCreate')
        this.currentItem = 'systemEgocardcreate'
        window.localStorage.currentTab = 'system'
        window.localStorage.currentItem = 'systemEgocardcreate'
      },
      gotoMercardCreate () {
        this.$router.push('/system/sysMercardCreate')
        this.currentItem = 'systemMercardcreate'
        window.localStorage.currentTab = 'system'
        window.localStorage.currentItem = 'systemMercardcreate'
      },
      gotoOrgTree () {
        this.$router.push('/org')
        this.show.machine = false
        this.show.promotion = false
        this.show.advertise = false
        this.show.report = false
        this.show.system = false
        this.currentTab = 'orgtree'
        window.localStorage.currentTab = 'orgtree'
        window.localStorage.currentItem = ''
      },
      gotoUserList () {
        this.$router.push('/user/list')
        this.show.machine = false
        this.show.promotion = false
        this.show.advertise = false
        this.show.report = false
        this.show.system = false
        this.currentTab = 'user'
        window.localStorage.currentTab = 'user'
        window.localStorage.currentItem = ''
      },
      gotoRoleList () {
        this.$router.push('/role/list')
        this.show.machine = false
        this.show.promotion = false
        this.show.advertise = false
        this.show.report = false
        this.show.system = false
        this.currentTab = 'role'
        window.localStorage.currentTab = 'role'
        window.localStorage.currentItem = ''
      }
    },
    components: {}
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  .main-sidebar {
    border-right: 1px solid #d2d6de;
  }

  a {
    cursor: pointer;
    user-select: none;
  }

  .treeview-menu {
    display: block;
  }

  .slide-fade-enter-active {
    transition: all .3s ease;
    height: 100%;
  }

  .slide-fade-leave-active {
    transition: all .1s ease;
  }

  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active for <2.1.8 */
  {
    transform: translateY(0px);
    opacity: 0;
    height: 0;
  }

</style>
