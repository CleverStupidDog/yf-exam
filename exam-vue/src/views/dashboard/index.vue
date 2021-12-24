<template>
  <div class="app-container">
    <el-row style="line-height: 30px">
      <el-row :span="24">欢迎使用 {{siteData.siteName}}</el-row>
      <el-row :span="24" style="font-size: 14px; color: #666">系统版本：1.3.0</el-row>
    </el-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  data() {
    return {
      currentRole: 'adminDashboard'
    }
  },
  computed: {
    ...mapGetters([
      'roles',
      'siteData'
    ])
  },
  created() {

  }
}
</script>
