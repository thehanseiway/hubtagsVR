require('babel/register');
var webpackConfig = require('hjs-webpack');
var React = require('react');
var PublicPage = require('./src/pages/public');
var Layout = require('./src/pages/layout');

module.exports = webpackConfig({
  in: 'src/app.js',
  out: 'public',
  clearBeforeBuild: true,
  html: function (context) {
    const publicPage = React.renderToString(React.createElement(PublicPage));
    const layoutPage = React.renderToString(React.createElement(Layout, {me: {}}));

    return {
        'index.html': context.defaultTemplate({html: publicPage}),
        '200.html': context.defaultTemplate({html: layoutPage}),
    }
  }
});
