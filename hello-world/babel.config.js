module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  env: {
    // 开发环境下不启用懒加载、加快编译速度
    development: {
      plugins: ['dynamic-import-node']
    }
  },
  plugins: [
    [
      'import',
      {
        libraryName: 'vant',
        libraryDirectory: 'es',
        style: true
      }
    ]
  ]
}
