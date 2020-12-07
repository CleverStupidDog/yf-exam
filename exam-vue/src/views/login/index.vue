<template>

  <el-container class="login-container">

    <el-main>
      <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" autocomplete="on" label-position="left">

        <div class="login-main">
          <div class="title-container">
            <h3 class="title">{{siteData.siteName}}</h3>
          </div>

          <el-form-item prop="username">
            <span class="svg-container">
              <svg-icon icon-class="user" />
            </span>
            <el-input
              ref="username"
              v-model="loginForm.username"
              placeholder="用户名"
              name="username"
              type="text"
              tabindex="1"
              autocomplete="on"
            />
          </el-form-item>

          <el-tooltip v-model="capsTooltip" content="Caps lock is On" placement="right" manual>
            <el-form-item prop="password">
              <span class="svg-container">
                <svg-icon icon-class="password" />
              </span>
              <el-input
                :key="passwordType"
                ref="password"
                v-model="loginForm.password"
                :type="passwordType"
                placeholder="密码"
                name="password"
                tabindex="2"
                autocomplete="on"
                @keyup.native="checkCapslock"
                @blur="capsTooltip = false"
                @keyup.enter.native="handleLogin"
              />
              <span class="show-pwd" @click="showPwd">
                <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
              </span>
            </el-form-item>
          </el-tooltip>

          <div style="position:relative;">

            <el-row :gutter="10">

              <el-col :span="12">
                <el-button :loading="loading" type="primary" style="width:100%;margin-bottom:30px;" @click.native.prevent="handleLogin">登录</el-button>
              </el-col>

              <el-col :span="12">
                <el-button type="warning" style="width:100%;margin-bottom:30px;" @click.native.prevent="studentRegister">学员注册</el-button>
              </el-col>

            </el-row>

          </div>

        </div>

      </el-form>

    </el-main>

    <el-footer style="background: #ffffff; text-align: center; line-height: 50px;font-size: 14px" height="50px">
      <a href="https://lp.yfhl.net" target="_blank" style="margin-left: 10px">©2020 云帆互联</a>
    </el-footer>

  </el-container>

</template>

<script>
  import { mapGetters } from 'vuex'
import { validUsername } from '@/utils/validate'
import 'element-ui/lib/theme-chalk/display.css'

export default {
  name: 'Login',
  computed: {
    ...mapGetters([
      'siteData'
    ])
  },
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!validUsername(value)) {
        callback(new Error('请输入正确的用户名！'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 5) {
        callback(new Error('密码不能小于5个字符'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        username: '',
        password: ''
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur', validator: validateUsername }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }]
      },
      passwordType: 'password',
      capsTooltip: false,
      loading: false,
      redirect: undefined,
      otherQuery: {}
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        const query = route.query
        if (query) {
          this.redirect = query.redirect
          this.otherQuery = this.getOtherQuery(query)
        }
      },
      immediate: true
    }
  },
  created() {
    // window.addEventListener('storage', this.afterQRScan)
  },
  mounted() {
    if (this.loginForm.username === '') {
      this.$refs.username.focus()
    } else if (this.loginForm.password === '') {
      this.$refs.password.focus()
    }
  },
  destroyed() {
    // window.removeEventListener('storage', this.afterQRScan)
  },
  methods: {

    studentRegister() {
      this.$router.push({ name: 'Register' })
    },

    studentLogin() {
      this.loginForm.username = 'person'
      this.loginForm.password = 'person'
      this.handleLogin()
    },

    adminLogin() {
      this.loginForm.username = 'admin'
      this.loginForm.password = 'admin'
      this.handleLogin()
    },

    checkCapslock({ shiftKey, key } = {}) {
      if (key && key.length === 1) {
        if (shiftKey && (key >= 'a' && key <= 'z') || !shiftKey && (key >= 'A' && key <= 'Z')) {
          this.capsTooltip = true
        } else {
          this.capsTooltip = false
        }
      }
      if (key === 'CapsLock' && this.capsTooltip === true) {
        this.capsTooltip = false
      }
    },
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('user/login', this.loginForm)
            .then(() => {
              this.$router.push({ path: this.redirect || '/', query: this.otherQuery })
              this.loading = false
            })
            .catch(() => {
              this.loading = false
            })
        } else {
          console.log('提交错误！')
          return false
        }
      })
    },
    getOtherQuery(query) {
      return Object.keys(query).reduce((acc, cur) => {
        if (cur !== 'redirect') {
          acc[cur] = query[cur]
        }
        return acc
      }, {})
    }
  }
}
</script>

<style lang="scss">

  $bg:#2d3a4b;
  $color:#001528;

  @supports (-webkit-mask: none) and (not (cater-color: $color)) {
    .login-container .el-input input {
      color: $color;
    }
  }

  /* reset element-ui css */
  .login-container {
    .el-input {
      display: inline-block;
      height: 47px;
      width: 85%;

      input {
        background: transparent;
        border: 0px;
        -webkit-appearance: none;
        border-radius: 0px;
        padding: 12px 5px 12px 15px;
        color: $color;
        height: 47px;
        caret-color: $color;

        &:-webkit-autofill {
          box-shadow: 0 0 0px 1000px #ffffff inset !important;
          -webkit-text-fill-color: $color !important;
        }
      }
    }

    .el-form-item {
      border: $bg 1px solid;
      border-radius: 5px;
      color: $color;
      background: #ffffff;
    }
  }
</style>

<style lang="scss" scoped>
  $bg:#2d3a4b;
  $dark_gray:#889aa4;
  $light_gray:#eee;

  .login-main{
    padding: 25px 15px 15px 15px;
    background-color: rgba(255,255,255,0.8);
    border-radius: 5px;
  }

  @media \0screen\,screen\9 {
    .login-main{
      padding: 15px;
      border-radius: 5px;
      background-color: rgba(0,0,0,0.5);
      filter:Alpha(opacity=50);
      *zoom:1;
    }
  }

  .login-container {
    min-height: 100%;
    width: 100%;
    background: url('../../assets/bg2.jpg') center center;
    overflow: hidden;

    .nav-line{
      position: absolute;
      width: 100%;
      background: #fefefe;
      text-align: right;
      padding: 10px;
    }

    .login-form {
      position: relative;
      width: 450px;
      max-width: 100%;
      padding: 120px 0 0;
      margin: 0 auto;
      overflow: hidden;
    }

    .tips {
      font-size: 14px;
      color: #fff;
      margin-bottom: 10px;

      span {
        &:first-of-type {
          margin-right: 16px;
        }
      }
    }

    .svg-container {
      padding: 6px 5px 6px 15px;
      color: $bg;
      vertical-align: middle;
      width: 30px;
      display: inline-block;
    }

    .title-container {
      position: relative;

      .title {
        font-size: 26px;
        color: $bg;
        margin: 0px auto 40px auto;
        text-align: center;
        font-weight: bold;
      }
    }

    .show-pwd {
      position: absolute;
      right: 10px;
      top: 7px;
      font-size: 16px;
      color: $bg;
      cursor: pointer;
      user-select: none;
    }

    .thirdparty-button {
      position: absolute;
      right: 0;
      bottom: 6px;
    }
  }

  .code-container{
    position: fixed; bottom: 50px; right: 10px; width: 200px; height: 260px
  }

  .code-container .title{
    width: 100%;text-align: center;line-height: 50px; color: #fff; font-weight: bold
  }

  .code-container .code{
    width: 200px; height: 200px
  }
</style>
