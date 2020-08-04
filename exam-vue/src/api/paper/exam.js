import request from '@/utils/request'

/**
 * 创建试卷
 * @param data
 */
export function createPaper(data) {
  return request({
    url: '/paper/paper/create-paper',
    method: 'post',
    data
  })
}

/**
 * 试卷详情
 * @param data
 */
export function paperDetail(data) {
  return request({
    url: '/paper/paper/paper-detail',
    method: 'post',
    data
  })
}


/**
 * 题目详情
 * @param data
 */
export function quDetail(data) {
  return request({
    url: '/paper/paper/qu-detail',
    method: 'post',
    data
  })
}

/**
 * 填充答案
 * @param data
 */
export function fillAnswer(data) {
  return request({
    url: '/paper/paper/fill-answer',
    method: 'post',
    data
  })
}

/**
 * 交卷
 * @param data
 */
export function handExam(data) {
  return request({
    url: '/paper/paper/hand-exam',
    method: 'post',
    data
  })
}


/**
 * 试卷详情
 * @param data
 */
export function paperResult(data) {
  return request({
    url: '/paper/paper/paper-result',
    method: 'post',
    data
  })
}


/**
 * 错题训练
 * @param data
 */
export function training(data) {
  return request({
    url: '/paper/paper/training',
    method: 'post',
    data
  })
}
