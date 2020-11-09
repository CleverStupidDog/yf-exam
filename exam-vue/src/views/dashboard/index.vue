<template>
  <div class="dashboard-container">
    <div style="padding: 20px; line-height: 30px">
      云帆培训考试系统 <span style="font-size:5px; vertical-align: top; color: #0d5ea5">开源版</span>
      <div style="color: #888; font-size: 14px">程序版本：v1.0.2</div>
      <div style="color: #888; font-size: 14px">商业版本：<a href="https://lp.yfhl.net" target="_blank">https://lp.yfhl.net</a></div>
      <div style="color: #888; font-size: 14px">QQ交流群：865330294</div>

      <a href="https://cdn.yfhl.net/docs/exam-guide.pdf" style="font-size: 14px" target="_blank">产品文档</a>
    </div>
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
      'roles'
    ])
  },
  created() {

  }
}
</script>
