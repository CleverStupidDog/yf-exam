import request from '@/utils/request'

/**
 * 题库详情
 * @param data
 */
export function fetchDetail(id) {
  const data = { id: id }

  return request({
    url: '/paper/rule/detail',
    method: 'post',
    data
  })
}

/**
 * 保存题库
 * @param data
 */
export function saveData(data) {
  return request({
    url: '/paper/rule/save',
    method: 'post',
    data
  })
}


/**
 * 保存题库
 * @param data
 */
export function fetchList() {
  const data = {}
  return request({
    url: '/paper/rule/list',
    method: 'post',
    data
  })
}


/**
 * 保存题库
 * @param data
 */
export function reviewPaper(data) {
  return request({
    url: '/paper/paper/review-paper',
    method: 'post',
    data
  })
}
