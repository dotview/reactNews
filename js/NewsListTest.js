var $ = require('jquery');
var NewsList = require('./NewsList');
var React = require('react');
var ReactDom = require('react-dom');

$.ajax({
  url: '/data/data.json'
}).then(function (items) {
  // Log the data so we can inspect it in the developer console.
  console.log('items', items);
  // Use a fake rank for now.
  ReactDom.render(<NewsList items={items}/>, $('#content')[0]);
});