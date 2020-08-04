import request from '@/utils/request'

// 获得用户协议详情，固定ID为0
export function fetchDetail() {
  return request({
    url: '/sys/config/detail',
    method: 'post',
    data: { 'id': '0' }
  })
}

export function saveData(data) {
  return request({
    url: '/sys/config/save',
    method: 'post',
    data
  })
}
