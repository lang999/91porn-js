import request from '../utils/request'
import CONST from '../config/const'
/**
 * @param param {Object} 列表参数
 * @param {string} [param.viewType=basic] - 显示模式 defualt: basic
 * @param {string} param.category - 分类
 * @param {number} [param.page=1] - 页码 default: 1
 * @param {number} [param.m] - 月份偏移量
 * @returns {Promise} 
 */
export function getList(param) {
  if(!param.page) param.page = 1
  if(!param.viewType) param.viewType = 'basic'

  return request({
      url: CONST.API_LIST,
      method: 'get',
      params: param
    }
  )
}
export default {
  getList
}