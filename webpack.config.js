var webpackConfig = require('hjs-webpack');

module.exports = webpackConfig({
  in: 'src/app.js',
  out: 'public',
  clearBeforeBuild: true,
  html: function (context) {
    return {
        'index.html': context.defaultTemplate(),
        '200.html': context.defaultTemplate(),
    }
  }
});
