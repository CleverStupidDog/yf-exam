import request from '@/utils/request'

export function fetchList() {
  return request({
    url: '/sys/role/list',
    method: 'post'
  })
}

