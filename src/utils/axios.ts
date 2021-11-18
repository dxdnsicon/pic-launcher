/*
 * @Author: shiningding <shiningding@tencent.com>
 * @Date: 2021-05-24 14:35:05
 * @--------------------------------------------------: 
 * @LastEditTime: 2021-11-05 15:33:16
 * @Modified By: shiningding <shiningding@tencent.com>
 * @---------------------------------------------------: 
 * @Description: 上报数据请求处理
 */

import axios, { AxiosResponse } from 'axios';
import log from '../utils/log';

// 创建axios实例s
const service = axios.create({
  // proxy: {
  //   host: '127.0.0.1',
  //   port: 8090
  // },
  timeout: 20 * 1000 // 请求超时时间
})

service.interceptors.request.use(config => {
  config.headers['Accept'] = '*/*',
  config.headers['Content-Type'] = 'application/json;charset=UTF-8',
  config.headers['User-Agent'] = 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1',
  config.headers['Content-Length'] = JSON.stringify(config.data).length,
  config.headers['Accept-Encoding'] = 'gzip',
  config.headers['sec-fetch-mode'] = 'cors',
  config.headers['sec-fetch-site'] = 'same-site',
  config.headers['sec-fetch-dest'] = 'empty',
  config.headers['Accept-Language'] = 'zh-CN,zh;q=0.9',
  config.headers['Cookie'] = 'pgv_info=ssid=s1939187925; ts_last=112223; ts_refer=ADTAGjzt3755; pgv_pvid=4419147778; ts_uid=4570496454'
  return config
  }, error => {
  log(error) // for debug
  Promise.reject(error)
})

service.interceptors.response.use(
  response => {
      const res = response.data
      log('log result:', res)
      return Promise.resolve(res);
  },error => {
      console.log('err' + error)// for debug
      return Promise.reject(error)
})

export default service;