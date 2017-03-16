<template>
  <header class="main-header">
    <!-- Logo -->
    <a @click="gotoMachineList" class="logo">
      <!-- mini logo for sidebar mini 50x50 pixels -->
      <span class="logo-mini">
                <img src="/static/images/logo.png" class="navbar-header-logo">
            </span>
      <!-- logo for regular state and mobile devices -->
      <span class="logo-lg">
                <img src="/static/images/logo.png" class="navbar-header-logo">
                 前海易购
            </span>
    </a>
    <!-- Header Navbar: style can be found in header.less -->
    <nav class="navbar navbar-static-top" role="navigation">
      <!-- Sidebar toggle button-->
      <a class="sidebar-toggle" data-toggle="offcanvas" @click="sidebarToggleBtn" role="button">
        <span class="sr-only">Toggle navigation</span>
      </a>
      <div class="navbar-custom-menu">
        <ul class="nav navbar-nav">
          <li class="hidden-xs hidden-sm hidden-md">
            <a href="#" class="dropdown-toggle" aria-expanded="false">
              上次登录IP:&nbsp;{{user.lastLoginIp}}
            </a>
          </li>
          <li class="hidden-xs hidden-sm hidden-md">
            <a href="#" class="dropdown-toggle" aria-expanded="false">
              上次登录时间:&nbsp;{{dateInit(user.lastLoginTime)}}
            </a>
          </li>
          <!-- Messages: style can be found in dropdown.less-->
          <li class="dropdown messages-menu">
            <a class="dropdown-toggle" @click="messagesBtn" aria-expanded="false">
              <i class="fa fa-envelope-o"></i>
              <!--<span class="label label-success">4</span>-->
            </a>
            <ul class="dropdown-menu" v-show="messages">
              <li class="header">暂无消息</li>
              <li class="footer"><a href="">查看全部消息</a></li>
            </ul>
          </li>
          <!-- Notifications: style can be found in dropdown.less -->
          <li class="dropdown notifications-menu">
            <a class="dropdown-toggle" @click="notificationsBtn" aria-expanded="false">
              <i class="fa fa-bell-o"></i>
              <span v-if="user.regIp!=user.lastLoginIp"
                    class="label label-warning">1</span>
            </a>
            <ul class="dropdown-menu" v-show="notifications">
              <li v-show="user.regIp==user.lastLoginIp" class="header">暂无告警</li>
              <li v-if="user.regIp!=user.lastLoginIp" class="header">上次登录IP:{{user.lastLoginIp}}
              </li>
              <li v-if="user.regIp!=user.lastLoginIp" class="header">本次登录IP:{{user.regIp}}</li>
              <li class="footer"><a href="">查看所有告警</a></li>
            </ul>
          </li>
          <!-- User Account: style can be found in dropdown.less -->
          <li>
            <a @click="gotoUserInfo">
              <i class="fa fa-user"></i>&nbsp;{{user.userName}}
            </a>
          </li>
          <li>
            <a @click="editPassword">
              <i class="fa fa-key"></i>
            </a>
          </li>
          <li>
            <a @click="logout">
              <i class="fa fa-sign-out"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
    <EditPassword :username="user.userName" v-on:dismiss="editpwdDismiss" v-if="editPasswordBtn"></EditPassword>
    <GotoUserInfo :userInfo="userInfo" v-on:dismiss="gotoinfoDismiss" v-if="gotoUserInfoBtn"></GotoUserInfo>
  </header>
</template>
<script>
  import GotoUserInfo from '../user/UserUserPersonalForm'
  import EditPassword from '../user/UserEditPassword'
  import axios from 'axios'
  export default{
    name: 'NavHeader',
    data () {
      return {
        alertDanger: false,
        danger: '',
        editPasswordBtn: false,
        gotoUserInfoBtn: false,
        notifications: false,
        messages: false
      }
    },
    computed: {
      user () {
        return this.$store.state.admin.currentUser
      },
      userInfo () {
        return this.$store.state.admin.userInfo
      }
    },
    mounted () {
    },
    methods: {
      gotoMachineList () {
        this.$router.push('/machine/list')
      },
      sidebarToggleBtn () {
        this.$store.commit('sidebarToggleBtn')
      },
      dateInit (data) {
        let date = new Date(data)
        let Y = date.getFullYear() + '-'
        let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
        let D = date.getDate() + ' '
        let h = date.getHours() + ':'
        let m = date.getMinutes() + ':'
        let s = date.getSeconds()
        return (Y + M + D + h + m + s)
      },
      messagesBtn () {
        if (this.messages === false) {
          this.messages = true
        } else {
          this.messages = false
        }
      },
      notificationsBtn () {
        if (this.notifications === false) {
          this.notifications = true
        } else {
          this.notifications = false
        }
      },
      // userinfo
      gotoUserInfo (e) {
        if (this.gotoUserInfoBtn === false) {
          this.gotoUserInfoBtn = true
        } else {
          this.gotoUserInfoBtn = false
          this.userInfo = {}
        }
        console.log(this.userInfo)
      },
      gotoinfoDismiss () {
        this.gotoUserInfoBtn = false
        this.userInfo = this.$store.state.admin.userInfo
      },
      // editpassword
      editPassword (e) {
        if (this.editPasswordBtn === false) {
          this.editPasswordBtn = true
        } else {
          this.editPasswordBtn = false
        }
      },
      editpwdDismiss () {
        this.editPasswordBtn = false
      },
      logout () {
        let _this = this
        axios.get('/logout', {
          baseURL: 'http://localhost:9999'
        }).then(function () {
          _this.$store.commit('setCurrentUser', null)
          _this.$router.push('/login')
        })
      }
    },
    components: {
      GotoUserInfo,
      EditPassword
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  .dropdown-menu{
    display: block;
  }
</style>
