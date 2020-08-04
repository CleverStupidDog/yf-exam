import request from '@/utils/request'

/**
 * 题库详情
 * @param data
 */
export function fetchDetail(data) {
  return request({
    url: '/qu/repo/detail',
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
    url: '/qu/repo/save',
    method: 'post',
    data
  })
}

/**
 * 保存题库
 * @param data
 */
export function fetchList(data) {
  return request({
    url: '/qu/repo/list',
    method: 'post',
    data
  })
}

/**
 * 题库批量操作
 * @param data
 */
export function batchAction(data) {
  return request({
    url: '/qu/repo/batch-action',
    method: 'post',
    data
  })
}
