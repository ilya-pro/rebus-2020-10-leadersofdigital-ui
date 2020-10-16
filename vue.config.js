module.exports = {
  productionSourceMap: false,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/rebus-2020-10-leadersofdigital-ui/'
    : '/',
  transpileDependencies: [
    'vuetify'
  ]
}
