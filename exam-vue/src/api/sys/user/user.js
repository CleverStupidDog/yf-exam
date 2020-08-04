import request from '@/utils/request'

export function updateData(data) {
  return request({
    url: '/sys/user/update',
    method: 'post',
    data
  })
}


export function saveData(data) {
  return request({
    url: '/sys/user/save',
    method: 'post',
    data
  })
}


export function userReg(data) {
  return request({
    url: '/sys/user/reg',
    method: 'post',
    data
  })
}
