<template>
  <div class="app-container">

    <h3>组卷信息</h3>
    <el-card style="margin-top: 20px">

      <div style="float: right; font-weight: bold; color: #ff0000">试卷总分：{{ postForm.totalScore }}分</div>

      <div>

        <div style="margin-bottom: 20px">
          <el-select v-model="postForm.level" class="filter-item" placeholder="选择难度等级" clearable="">
            <el-option
              v-for="item in levels"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>

        </div>

        <el-button class="filter-item" size="small" type="primary" icon="el-icon-plus" @click="handleAdd">
          添加题库
        </el-button>

        <el-table
          :data="repoList"
          :border="false"
          empty-text="请点击上面的`添加题库`进行设置"
          style="width: 100%; margin-top: 15px"
        >
          <el-table-column
            label="题库"
            width="200"
          >
            <template slot-scope="scope">
              <repo-select v-model="scope.row.repoId" :multi="false" />
            </template>

          </el-table-column>
          <el-table-column
            label="单选数量"
            align="center"
          >

            <template slot-scope="scope">
              <el-input-number v-model="scope.row.radioCount" :controls="false" style="width: 100%" />
            </template>

          </el-table-column>

          <el-table-column
            label="单选分数"
            align="center"
          >
            <template slot-scope="scope">
              <el-input-number v-model="scope.row.radioScore" :controls="false" style="width: 100%" />
            </template>
          </el-table-column>

          <el-table-column
            label="多选数量"
            align="center"
          >

            <template slot-scope="scope">
              <el-input-number v-model="scope.row.multiCount" :controls="false" style="width: 100%" />
            </template>

          </el-table-column>

          <el-table-column
            label="多选分数"
            align="center"
          >
            <template slot-scope="scope">
              <el-input-number v-model="scope.row.multiScore" :controls="false" style="width: 100%" />
            </template>
          </el-table-column>

          <el-table-column
            label="判断题数量"
            align="center"
          >

            <template slot-scope="scope">
              <el-input-number v-model="scope.row.judgeCount" :controls="false" style="width: 100%" />
            </template>

          </el-table-column>

          <el-table-column
            label="判断题分数"
            align="center"
          >
            <template slot-scope="scope">
              <el-input-number v-model="scope.row.judgeScore" :controls="false" style="width: 100%" />
            </template>
          </el-table-column>

          <el-table-column
            label="删除"
            align="center"
            width="80px"
          >
            <template slot-scope="scope">
              <el-button type="danger" icon="el-icon-delete" circle @click="removeItem(scope.$index)" />
            </template>
          </el-table-column>

        </el-table>

      </div>

    </el-card>

    <h3>考试配置</h3>
    <el-card style="margin-top: 20px">

      <el-form ref="postForm" :model="postForm" :rules="rules" label-position="left" label-width="120px">

        <el-form-item label="考试名称" prop="title">
          <el-input v-model="postForm.title" />
        </el-form-item>

        <el-form-item label="考试描述" prop="content">
          <el-input v-model="postForm.content" type="textarea" />
        </el-form-item>

        <el-form-item label="总分数" prop="totalScore">
          <el-input-number :value="postForm.totalScore" disabled />
        </el-form-item>

        <el-form-item label="及格分" prop="qualifyScore">
          <el-input-number v-model="postForm.qualifyScore" :max="postForm.totalScore" />
        </el-form-item>

        <el-form-item label="考试时长(分钟)" prop="totalTime">
          <el-input-number v-model="postForm.totalTime" />
        </el-form-item>

        <el-form-item label="是否限时">
          <el-checkbox v-model="postForm.timeLimit" />
        </el-form-item>

        <el-form-item v-if="postForm.timeLimit" label="考试时间" prop="totalTime">

          <el-date-picker
            v-model="dateValues"
            format="yyyy-MM-dd"
            value-format="yyyy-MM-dd"
            type="daterange"
            range-separator="至"
            start-placeholder="开始时间"
            end-placeholder="结束时间"
          />

        </el-form-item>

      </el-form>

    </el-card>

    <h3>权限配置</h3>
    <el-card style="margin-top: 20px;">

      <el-radio-group v-model="postForm.openType" style="margin-bottom: 20px">
        <el-radio :label="1" border>完全公开</el-radio>
        <el-radio :label="2" border>部门开放</el-radio>
      </el-radio-group>

      <el-alert
        v-if="postForm.openType===1"
        title="开放的，任何人都可以进行考试！"
        type="warning"
      />

      <div v-if="postForm.openType===2">
        <el-input
          v-model="filterText"
          placeholder="输入关键字进行过滤"
        />

        <el-tree

          ref="tree"
          v-loading="treeLoading"
          empty-text=" "
          :data="treeData"
          default-expand-all
          show-checkbox
          node-key="id"
          :default-checked-keys="postForm.departIds"
          :props="defaultProps"
          :filter-node-method="filterNode"
          @check-change="handleCheckChange"
        />

      </div>

    </el-card>

    <div style="margin-top: 20px">
      <el-button type="primary" @click="handleSave">保存</el-button>
    </div>



  </div>
</template>

<script>
import { fetchDetail, saveData } from '@/api/exam/exam'
import { fetchTree } from '@/api/sys/depart/depart'
import RepoSelect from '@/components/RepoSelect'

export default {
  name: 'ExamDetail',
  components: { RepoSelect },
  data() {
    return {

      step: 1,
      treeData: [],
      defaultProps: {
        label: 'deptName'
      },
      levels: [
        { value: 0, label: '不限' },
        { value: 1, label: '普通' },
        { value: 2, label: '较难' }
      ],
      filterText: '',
      treeLoading: false,
      dateValues: [],
      quDialogShow: false,
      quDialogType: 1,
      excludes: [],

      scoreDialog: false,
      scoreBatch: 0,

      // 题库
      repoList: [],

      // 题目列表
      quList: [[], [], [], []],
      quEnable: [false, false, false, false],

      postForm: {
        // 总分数
        totalScore: 0,
        // 题库列表
        repoList: [],
        // 题目列表
        quList: [],
        // 组题方式
        joinType: 1,
        // 开放类型
        openType: 1,
        // 考试班级列表
        departIds: []

      },
      rules: {
        title: [
          { required: true, message: '考试名称不能为空！' }
        ],

        content: [
          { required: true, message: '考试名称不能为空！' }
        ],

        open: [
          { required: true, message: '考试权限不能为空！' }
        ],

        totalScore: [
          { required: true, message: '考试分数不能为空！' }
        ],

        qualifyScore: [
          { required: true, message: '及格分不能为空！' }
        ],

        totalTime: [
          { required: true, message: '考试时间不能为空！' }
        ],

        ruleId: [
          { required: true, message: '考试规则不能为空' }
        ],
        password: [
          { required: true, message: '考试口令不能为空！' }
        ]
      }
    }
  },

  watch: {

    filterText(val) {
      this.$refs.tree.filter(val)
    },

    dateValues: {

      handler() {
        this.postForm.startTime = this.dateValues[0]
        this.postForm.endTime = this.dateValues[1]
      }
    },

    // 题库变换
    repoList: {
      handler() {
        const that = this

        that.postForm.totalScore = 0

        this.repoList.forEach(function(item) {
          that.postForm.totalScore += item.radioCount * item.radioScore
          that.postForm.totalScore += item.multiCount * item.multiScore
          that.postForm.totalScore += item.judgeCount * item.judgeScore
        })

        // 赋值
        this.postForm.repoList = this.repoList
      },
      deep: true
    }

  },
  created() {
    const id = this.$route.params.id
    if (typeof id !== 'undefined') {
      this.fetchData(id)
    }

    fetchTree({}).then(response => {
      this.treeData = response.data
    })
  },
  methods: {

    handleSave() {
      this.$refs.postForm.validate((valid) => {
        if (!valid) {
          return
        }

        if (this.postForm.totalScore === 0) {
          this.$notify({
            title: '提示信息',
            message: '考试规则设置不正确，请确认！',
            type: 'warning',
            duration: 2000
          })

          return
        }

        if (this.postForm.joinType === 1) {
          for (let i = 0; i < this.postForm.repoList.length; i++) {
            const repo = this.postForm.repoList[i]

            if (!repo.repoId) {
              this.$notify({
                title: '提示信息',
                message: '考试题库选择不正确！',
                type: 'warning',
                duration: 2000
              })

              return
            }

            if ((repo.radioCount > 0 && repo.radioScore === 0) || (repo.radioCount === 0 && repo.radioScore > 0)) {
              this.$notify({
                title: '提示信息',
                message: '题库第：[' + (i + 1) + ']项存在无效的单选题配置！',
                type: 'warning',
                duration: 2000
              })

              return
            }

            if ((repo.multiCount > 0 && repo.multiScore === 0) || (repo.multiCount === 0 && repo.multiScore > 0)) {
              this.$notify({
                title: '提示信息',
                message: '题库第：[' + (i + 1) + ']项存在无效的多选题配置！',
                type: 'warning',
                duration: 2000
              })

              return
            }

            if ((repo.judgeCount > 0 && repo.judgeScore === 0) || (repo.judgeCount === 0 && repo.judgeScore > 0)) {
              this.$notify({
                title: '提示信息',
                message: '题库第：[' + (i + 1) + ']项存在无效的判断题配置！',
                type: 'warning',
                duration: 2000
              })
              return
            }
          }
        }

        this.$confirm('确实要提交保存吗？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.submitForm()
        })
      })
    },

    handleCheckChange() {
      const that = this
      // 置空
      this.postForm.departIds = []

      const nodes = this.$refs.tree.getCheckedNodes()
      nodes.forEach(function(item) {
        that.postForm.departIds.push(item.id)
      })
    },

    // 添加子项
    handleAdd() {
      this.repoList.push({ radioCount: 0, radioScore: 0, multiCount: 0, multiScore: 0, judgeCount: 0, judgeScore: 0, saqCount: 0, saqScore: 0 })
    },

    removeItem(index) {
      this.repoList.splice(index, 1)
    },

    fetchData(id) {
      const that = this

      fetchDetail(id).then(response => {
        this.postForm = response.data

        if (this.postForm.startTime && this.postForm.endTime) {
          this.dateValues[0] = this.postForm.startTime
          this.dateValues[1] = this.postForm.endTime
        }

        // 按分组填充题目
        if (this.postForm.joinType === 2) {
          this.postForm.quList.forEach(function(item) {
            const index = item.quType - 1
            that.quList[index].push(item)
            that.quEnable[index] = true
          })
        }

        if (this.postForm.joinType === 1) {
          that.repoList = that.postForm.repoList
        }
      })
    },

    submitForm() {
      // 校验和处理数据
      this.postForm.repoList = this.repoList

      saveData(this.postForm).then(() => {
        this.$notify({
          title: '成功',
          message: '考试保存成功！',
          type: 'success',
          duration: 2000
        })

        this.$router.push({ name: 'ListExam' })
      })
    },

    filterNode(value, data) {
      if (!value) return true
      return data.deptName.indexOf(value) !== -1
    }

  }
}
</script>

<style scoped>

</style>

