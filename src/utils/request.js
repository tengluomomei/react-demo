import axios from 'axios'
import {message,Modal} from 'antd'
import {
  ExclamationCircleOutlined
} from '@ant-design/icons'
import store from '@/store/index'
import {resetUser} from '@/store/actions'
const {confirm} = Modal

const baseURL = {
  dev: 'http://8.218.112.99'
}

const version = '/ml/ml-mall'

// 创建axios实例
const service = axios.create({
  baseURL: baseURL.dev + version,
  timeout: 5000
})

// 添加请求拦截器
service.interceptors.request.use(
  config => {
    // 添加Token
    config.headers.Authorization = localStorage.getItem('token')
    return config
  },
  error => {
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// 添加响应拦截器
service.interceptors.response.use(
  response => {
    // 如果代码走到这里，HTTP状态码=200
    const res = response.data
    console.log('----响应拦截器', res)
    // 对业务状态码进行判断
    if (res.code !== 1) {
      // 表示业务失败，就把错误信息弹出来
      message.error(res.msg || '入参有误')

      // // 当Token过期要求重新登录
      if (res.code === 100000) {
        // 登录重新登录
        confirm({
          title: '当前你的登录已失效',
          icon: < ExclamationCircleOutlined />,
          content: '请重新登录',
          okText: '重新登录',
          // 隐藏取消按钮，要求必须重新登录
          cancelButtonProps: {
            style: {
              display: 'none'
            }
          },
          onOk() {
            store.dispatch(resetUser())
          }
        })
      }
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res.data
    }
  },
  error => {
    console.log('err' + error)
    return Promise.reject(error)
  }
)

export default service