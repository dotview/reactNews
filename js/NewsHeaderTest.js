var $ = require('jquery');
var NewsHeader = require('./NewsHeader');
var React  = require('react');
var ReactDom = require('react-dom');

ReactDom.render(<NewsHeader />,$('#content')[0])