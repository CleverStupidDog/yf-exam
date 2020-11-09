<template>
  <div class="app-container">

    <el-row :gutter="24">

      <el-col :span="24" style="margin-bottom: 20px">

        <el-alert
          title="点击`开始考试`后将自动进入考试，请诚信考试！"
          type="error"
          style="margin-bottom: 10px"
        />

        <el-card class="pre-exam">

          <div><strong>考试名称：</strong>{{ detailData.title }}</div>
          <div><strong>考试时长：</strong>{{ detailData.totalTime }}分钟</div>
          <div><strong>试卷总分：</strong>{{ detailData.totalScore }}分</div>
          <div><strong>及格分数：</strong>{{ detailData.qualifyScore }}分</div>
          <div><strong>考试描述：</strong>{{ detailData.content }}</div>
          <div><strong>开放类型：</strong> {{ detailData.openType | examOpenType }}</div>

        </el-card>

      </el-col>

      <el-col :span="24">

        <el-button type="primary" icon="el-icon-caret-right" @click="handleCreate">
          开始考试
        </el-button>

        <el-button @click="handleBack">
          返回
        </el-button>

      </el-col>

    </el-row>
  </div>
</template>

<script>
import { Loading } from 'element-ui'
import { fetchDetail } from '@/api/exam/exam'
import { createPaper } from '@/api/paper/exam'

export default {
  name: 'PreExam',
  data() {
    return {
      detailData: {},
      postForm: {
        examId: '',
        password: ''
      },
      rules: {
        password: [
          { required: true, message: '考试密码不能为空！' }
        ]
      }
    }
  },

  created() {
    this.postForm.examId = this.$route.params.examId
    this.fetchData()
  },

  methods: {

    fetchData() {
      fetchDetail(this.postForm.examId).then(response => {
        this.detailData = response.data
      })
    },

    handleCreate() {
      const that = this

      // 打开
      const loading = Loading.service({
        text: '正在努力创建试卷...',
        background: 'rgba(0, 0, 0, 0.7)'
      })

      createPaper(this.postForm).then(response => {
        console.log(response)

        if (response.code === 0) {
          this.$message({
            message: '试卷创建成功，即将进入考试！',
            type: 'success'
          })

          setTimeout(function() {
            loading.close()
            that.dialogVisible = false
            that.$router.push({ name: 'StartExam', params: { id: response.data.id }})
          }, 1000)
        }
      }).catch(() => {
        loading.close()
      })
    },

    handleBack() {
      this.$router.push({ name: 'ExamOnline' })
    }

  }
}
</script>

<style scoped>

  .pre-exam div {

    line-height: 42px;
    color: #555555;
  }

</style>

