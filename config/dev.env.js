'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

// 开发环境
module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
})

// // 创建axios实例
// const service = axios.create({
//   baseURL: process.env.BASE_API, // api的base_url
//   timeout: 5000 // 请求超时时间
// })


