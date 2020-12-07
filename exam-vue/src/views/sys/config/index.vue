<template>
  <div class="app-container">

    <el-form ref="postForm" :model="postForm" :rules="rules" label-position="left" label-width="100px">

      <el-card>

        <el-form-item label="系统名称">
          <el-input v-model="postForm.siteName" placeholder="系统显示名称" />
        </el-form-item>

        <!-- 有需求可自行重构、接口有前后端LOGO -->

<!--        <el-form-item label="后台LOGO">-->
<!--          <single-upload v-model="postForm.backLogo" />-->
<!--        </el-form-item>-->

<!--        <el-form-item label="前端LOGO">-->
<!--          <single-upload v-model="postForm.frontLogo" />-->
<!--        </el-form-item>-->

        <el-row>
          <el-button type="primary" @click="submitForm">保存</el-button>
        </el-row>

      </el-card>

    </el-form>

  </div>
</template>

<script>
import { fetchDetail, saveData } from '@/api/sys/config/config'

export default {
  name: 'Config',
  data() {
    return {
      postForm: {
        id: '1'
      },
      loading: false,
      rules: {
      }
    }
  },
  created() {
    this.fetchData()
  },
  methods: {

    fetchData() {
      fetchDetail().then(response => {
        this.postForm = response.data
      })
    },
    submitForm() {
      console.log(JSON.stringify(this.postForm))

      this.$refs.postForm.validate((valid) => {
        if (!valid) {
          return
        }

        this.loading = true
        this.postForm.id = '1'

        saveData(this.postForm).then(() => {
          this.$notify({
            title: '成功',
            message: '配置保存成功！',
            type: 'success',
            duration: 2000
          })
        })
        this.loading = false
      })
    }
  }
}
</script>

<style scoped>

</style>
