module.exports = {
  configureWebpack:{
    resolve: {
      //给路径起别名
      alias: {
        //@表示src文件夹，脚手架默认配置过了
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views'
      }
    }
  }
}