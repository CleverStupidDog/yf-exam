import request from '@/utils/request'

export function fetchList(url, query) {
  return request({
    url: url,
    method: 'post',
    data: query
  })
}

export function fetchDetail(url, id) {
  return request({
    url: url,
    method: 'post',
    data: { 'id': id }
  })
}

export function saveData(url, data) {
  return request({
    url: url,
    method: 'post',
    data
  })
}

export function deleteData(url, ids) {
  return request({
    url: url,
    method: 'post',
    data: { 'ids': ids }
  })
}

export function changeState(url, ids, state) {
  return request({
    url: url,
    method: 'post',
    data: { 'ids': ids, 'state': state }
  })
}
