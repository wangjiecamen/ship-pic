module.exports = {
  plugins: {
    'postcss-import': {},
    autoprefixer: {},
    'postcss-pxtorem': {
      rootValue: 192, //设计稿宽度1920/10
      unitPrecision: 5, //转换后保留的小数点位数
      propList: ['*'], //需要转换的属性
      mediaQuery: false, // 是否转换 @media 条件中的px（只影响条件，不影响代码块）
      minPixelValue: 2, // 1px 不转换，大于等于2px的转换
      exclude: /node_modules/i
    },
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
  },
}
