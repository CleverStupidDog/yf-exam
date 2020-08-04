import request from '@/utils/request'

/**
 * 题库详情
 * @param data
 */
export function nextQu(id) {
  const data = { id: id }

  return request({
    url: '/user/wrong-book/next',
    method: 'post',
    data
  })
}

