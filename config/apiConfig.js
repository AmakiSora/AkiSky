// const isPro = Object.is(process.env.NODE_ENV, 'production')//生产环境和开发环境转换用
const isPro = true
module.exports = {
  baseUrl: isPro ? 'http://localhost:8080' : 'api/'
}
