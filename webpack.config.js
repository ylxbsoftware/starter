module.exports = {
  devtool: 'eval',
  devServer: require('./webpack-config/dev-server'),
  entry: require('./webpack-config/entry'),
  output: require('./webpack-config/output'),
  plugins: require('./webpack-config/plugins'),
  module: require('./webpack-config/modules'),
  resolve: {
    modules: ['node_modules', 'src', 'src/pages', 'src/assets']
  }
};
