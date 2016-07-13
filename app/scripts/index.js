var React = require('react');
var ReactDOM = require('react-dom');

var ShirtCollection = require('./models/models').ShirtCollection;
var AppComponent = require('./components/shirt.jsx');

ReactDOM.render(
  React.createElement(AppComponent),
  document.getElementById('container')
);
