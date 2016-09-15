var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./App');

require('./index.css');
require('./App.css');
require('bootstrap/dist/css/bootstrap.min.css');

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
