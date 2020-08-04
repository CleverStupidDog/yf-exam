import request from '@/utils/request'

/**
 * 题库详情
 * @param data
 */
export function fetchDetail(id) {
  const data = { id: id }

  return request({
    url: '/qu/qu/detail',
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
    url: '/qu/qu/save',
    method: 'post',
    data
  })
}
