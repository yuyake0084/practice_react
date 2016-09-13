(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var ProductCategoryRow = React.createClass({
  displayName: "ProductCategoryRow",

  render: function render() {
    return React.createElement(
      "tr",
      null,
      React.createElement(
        "th",
        { colSpan: "2" },
        this.props.category
      )
    );
  }
});

var ProductRow = React.createClass({
  displayName: "ProductRow",

  render: function render() {
    var name = this.props.product.stocked ? this.props.product.name : React.createElement(
      "span",
      { style: { color: 'red' } },
      this.props.product.name
    );
    return React.createElement(
      "tr",
      null,
      React.createElement(
        "td",
        null,
        name
      ),
      React.createElement(
        "td",
        null,
        this.props.product.price
      )
    );
  }
});

var ProductTable = React.createClass({
  displayName: "ProductTable",

  render: function render() {
    var rows = [];
    var lastCategory = null;
    this.props.products.forEach(function (product) {
      if (product.name.indexOf(this.props.filterText) === -1 || !product.stocked && this.props.inStockOnly) {
        return;
      }
      if (product.category !== lastCategory) {
        rows.push(React.createElement(ProductCategoryRow, { category: product.category, key: product.category }));
      }
      rows.push(React.createElement(ProductRow, { product: product, key: product.name }));
      lastCategory = product.category;
    }.bind(this));
    return React.createElement(
      "table",
      null,
      React.createElement(
        "thead",
        null,
        React.createElement(
          "tr",
          null,
          React.createElement(
            "th",
            null,
            "Name"
          ),
          React.createElement(
            "th",
            null,
            "Price"
          )
        )
      ),
      React.createElement(
        "tbody",
        null,
        rows
      )
    );
  }
});

var SearchBar = React.createClass({
  displayName: "SearchBar",

  render: function render() {
    return React.createElement(
      "form",
      null,
      React.createElement("input", { type: "text", placeholder: "Search...", value: this.props.filterText }),
      React.createElement(
        "p",
        null,
        React.createElement("input", { type: "checkbox", checked: this.props.inStockOnly }),
        ' ',
        "Only show products in stock"
      )
    );
  }
});

var FilterableProductTable = React.createClass({
  displayName: "FilterableProductTable",

  getInitialState: function getInitialState() {
    return {
      filterText: '',
      inStockOnly: false
    };
  },

  render: function render() {
    return React.createElement(
      "div",
      null,
      React.createElement(SearchBar, {
        filterText: this.state.filterText,
        inStockOnly: this.state.inStockOnly
      }),
      React.createElement(ProductTable, {
        products: this.props.products,
        filterText: this.state.filterText,
        inStockOnly: this.state.inStockOnly
      })
    );
  }
});

var PRODUCTS = [{ category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' }, { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' }, { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' }, { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' }, { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' }, { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' }];

ReactDOM.render(React.createElement(FilterableProductTable, { products: PRODUCTS }), document.getElementById('container'));

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanN4L2FwcC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLElBQUkscUJBQXFCLE1BQU0sV0FBTixDQUFrQjtBQUFBOztBQUN6QyxVQUFRLGtCQUFXO0FBQ2pCLFdBQVE7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBLFVBQUksU0FBUSxHQUFaO0FBQWlCLGFBQUssS0FBTCxDQUFXO0FBQTVCO0FBQUosS0FBUjtBQUNEO0FBSHdDLENBQWxCLENBQXpCOztBQU1BLElBQUksYUFBYSxNQUFNLFdBQU4sQ0FBa0I7QUFBQTs7QUFDakMsVUFBUSxrQkFBVztBQUNqQixRQUFJLE9BQU8sS0FBSyxLQUFMLENBQVcsT0FBWCxDQUFtQixPQUFuQixHQUNULEtBQUssS0FBTCxDQUFXLE9BQVgsQ0FBbUIsSUFEVixHQUVUO0FBQUE7QUFBQSxRQUFNLE9BQU8sRUFBQyxPQUFPLEtBQVIsRUFBYjtBQUNHLFdBQUssS0FBTCxDQUFXLE9BQVgsQ0FBbUI7QUFEdEIsS0FGRjtBQUtBLFdBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUs7QUFBTCxPQURGO0FBRUU7QUFBQTtBQUFBO0FBQUssYUFBSyxLQUFMLENBQVcsT0FBWCxDQUFtQjtBQUF4QjtBQUZGLEtBREY7QUFNRDtBQWJnQyxDQUFsQixDQUFqQjs7QUFnQkEsSUFBSSxlQUFlLE1BQU0sV0FBTixDQUFrQjtBQUFBOztBQUNuQyxVQUFRLGtCQUFXO0FBQ2pCLFFBQUksT0FBTyxFQUFYO0FBQ0EsUUFBSSxlQUFlLElBQW5CO0FBQ0EsU0FBSyxLQUFMLENBQVcsUUFBWCxDQUFvQixPQUFwQixDQUE0QixVQUFTLE9BQVQsRUFBa0I7QUFDNUMsVUFBSSxRQUFRLElBQVIsQ0FBYSxPQUFiLENBQXFCLEtBQUssS0FBTCxDQUFXLFVBQWhDLE1BQWdELENBQUMsQ0FBakQsSUFBdUQsQ0FBQyxRQUFRLE9BQVQsSUFBb0IsS0FBSyxLQUFMLENBQVcsV0FBMUYsRUFBd0c7QUFDdEc7QUFDRDtBQUNELFVBQUksUUFBUSxRQUFSLEtBQXFCLFlBQXpCLEVBQXVDO0FBQ3JDLGFBQUssSUFBTCxDQUFVLG9CQUFDLGtCQUFELElBQW9CLFVBQVUsUUFBUSxRQUF0QyxFQUFnRCxLQUFLLFFBQVEsUUFBN0QsR0FBVjtBQUNEO0FBQ0QsV0FBSyxJQUFMLENBQVUsb0JBQUMsVUFBRCxJQUFZLFNBQVMsT0FBckIsRUFBOEIsS0FBSyxRQUFRLElBQTNDLEdBQVY7QUFDQSxxQkFBZSxRQUFRLFFBQXZCO0FBQ0QsS0FUMkIsQ0FTMUIsSUFUMEIsQ0FTckIsSUFUcUIsQ0FBNUI7QUFVQSxXQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRjtBQURGLE9BREY7QUFPRTtBQUFBO0FBQUE7QUFBUTtBQUFSO0FBUEYsS0FERjtBQVdEO0FBekJrQyxDQUFsQixDQUFuQjs7QUE0QkEsSUFBSSxZQUFZLE1BQU0sV0FBTixDQUFrQjtBQUFBOztBQUNoQyxVQUFRLGtCQUFXO0FBQ2pCLFdBQ0U7QUFBQTtBQUFBO0FBQ0UscUNBQU8sTUFBSyxNQUFaLEVBQW1CLGFBQVksV0FBL0IsRUFBMkMsT0FBTyxLQUFLLEtBQUwsQ0FBVyxVQUE3RCxHQURGO0FBRUU7QUFBQTtBQUFBO0FBQ0UsdUNBQU8sTUFBSyxVQUFaLEVBQXVCLFNBQVMsS0FBSyxLQUFMLENBQVcsV0FBM0MsR0FERjtBQUVHLFdBRkg7QUFBQTtBQUFBO0FBRkYsS0FERjtBQVVEO0FBWitCLENBQWxCLENBQWhCOztBQWVBLElBQUkseUJBQXlCLE1BQU0sV0FBTixDQUFrQjtBQUFBOztBQUM3QyxtQkFBaUIsMkJBQVc7QUFDMUIsV0FBTztBQUNMLGtCQUFZLEVBRFA7QUFFTCxtQkFBYTtBQUZSLEtBQVA7QUFJRCxHQU40Qzs7QUFRN0MsVUFBUSxrQkFBVztBQUNqQixXQUNFO0FBQUE7QUFBQTtBQUNFLDBCQUFDLFNBQUQ7QUFDRSxvQkFBWSxLQUFLLEtBQUwsQ0FBVyxVQUR6QjtBQUVFLHFCQUFhLEtBQUssS0FBTCxDQUFXO0FBRjFCLFFBREY7QUFLRSwwQkFBQyxZQUFEO0FBQ0Usa0JBQVUsS0FBSyxLQUFMLENBQVcsUUFEdkI7QUFFRSxvQkFBWSxLQUFLLEtBQUwsQ0FBVyxVQUZ6QjtBQUdFLHFCQUFhLEtBQUssS0FBTCxDQUFXO0FBSDFCO0FBTEYsS0FERjtBQWFEO0FBdEI0QyxDQUFsQixDQUE3Qjs7QUEwQkEsSUFBSSxXQUFXLENBQ2IsRUFBQyxVQUFVLGdCQUFYLEVBQTZCLE9BQU8sUUFBcEMsRUFBOEMsU0FBUyxJQUF2RCxFQUE2RCxNQUFNLFVBQW5FLEVBRGEsRUFFYixFQUFDLFVBQVUsZ0JBQVgsRUFBNkIsT0FBTyxPQUFwQyxFQUE2QyxTQUFTLElBQXRELEVBQTRELE1BQU0sVUFBbEUsRUFGYSxFQUdiLEVBQUMsVUFBVSxnQkFBWCxFQUE2QixPQUFPLFFBQXBDLEVBQThDLFNBQVMsS0FBdkQsRUFBOEQsTUFBTSxZQUFwRSxFQUhhLEVBSWIsRUFBQyxVQUFVLGFBQVgsRUFBMEIsT0FBTyxRQUFqQyxFQUEyQyxTQUFTLElBQXBELEVBQTBELE1BQU0sWUFBaEUsRUFKYSxFQUtiLEVBQUMsVUFBVSxhQUFYLEVBQTBCLE9BQU8sU0FBakMsRUFBNEMsU0FBUyxLQUFyRCxFQUE0RCxNQUFNLFVBQWxFLEVBTGEsRUFNYixFQUFDLFVBQVUsYUFBWCxFQUEwQixPQUFPLFNBQWpDLEVBQTRDLFNBQVMsSUFBckQsRUFBMkQsTUFBTSxTQUFqRSxFQU5hLENBQWY7O0FBU0EsU0FBUyxNQUFULENBQ0Usb0JBQUMsc0JBQUQsSUFBd0IsVUFBVSxRQUFsQyxHQURGLEVBRUUsU0FBUyxjQUFULENBQXdCLFdBQXhCLENBRkYiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIFByb2R1Y3RDYXRlZ29yeVJvdyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gKDx0cj48dGggY29sU3Bhbj1cIjJcIj57dGhpcy5wcm9wcy5jYXRlZ29yeX08L3RoPjwvdHI+KTtcbiAgfVxufSk7XG5cbnZhciBQcm9kdWN0Um93ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBuYW1lID0gdGhpcy5wcm9wcy5wcm9kdWN0LnN0b2NrZWQgP1xuICAgICAgdGhpcy5wcm9wcy5wcm9kdWN0Lm5hbWUgOlxuICAgICAgPHNwYW4gc3R5bGU9e3tjb2xvcjogJ3JlZCd9fT5cbiAgICAgICAge3RoaXMucHJvcHMucHJvZHVjdC5uYW1lfVxuICAgICAgPC9zcGFuPjtcbiAgICByZXR1cm4gKFxuICAgICAgPHRyPlxuICAgICAgICA8dGQ+e25hbWV9PC90ZD5cbiAgICAgICAgPHRkPnt0aGlzLnByb3BzLnByb2R1Y3QucHJpY2V9PC90ZD5cbiAgICAgIDwvdHI+XG4gICAgKTtcbiAgfVxufSk7XG5cbnZhciBQcm9kdWN0VGFibGUgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgdmFyIHJvd3MgPSBbXTtcbiAgICB2YXIgbGFzdENhdGVnb3J5ID0gbnVsbDtcbiAgICB0aGlzLnByb3BzLnByb2R1Y3RzLmZvckVhY2goZnVuY3Rpb24ocHJvZHVjdCkge1xuICAgICAgaWYgKHByb2R1Y3QubmFtZS5pbmRleE9mKHRoaXMucHJvcHMuZmlsdGVyVGV4dCkgPT09IC0xIHx8ICghcHJvZHVjdC5zdG9ja2VkICYmIHRoaXMucHJvcHMuaW5TdG9ja09ubHkpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChwcm9kdWN0LmNhdGVnb3J5ICE9PSBsYXN0Q2F0ZWdvcnkpIHtcbiAgICAgICAgcm93cy5wdXNoKDxQcm9kdWN0Q2F0ZWdvcnlSb3cgY2F0ZWdvcnk9e3Byb2R1Y3QuY2F0ZWdvcnl9IGtleT17cHJvZHVjdC5jYXRlZ29yeX0gLz4pO1xuICAgICAgfVxuICAgICAgcm93cy5wdXNoKDxQcm9kdWN0Um93IHByb2R1Y3Q9e3Byb2R1Y3R9IGtleT17cHJvZHVjdC5uYW1lfSAvPik7XG4gICAgICBsYXN0Q2F0ZWdvcnkgPSBwcm9kdWN0LmNhdGVnb3J5O1xuICAgIH0uYmluZCh0aGlzKSk7XG4gICAgcmV0dXJuIChcbiAgICAgIDx0YWJsZT5cbiAgICAgICAgPHRoZWFkPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5OYW1lPC90aD5cbiAgICAgICAgICAgIDx0aD5QcmljZTwvdGg+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90aGVhZD5cbiAgICAgICAgPHRib2R5Pntyb3dzfTwvdGJvZHk+XG4gICAgICA8L3RhYmxlPlxuICAgICk7XG4gIH1cbn0pO1xuXG52YXIgU2VhcmNoQmFyID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8Zm9ybT5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJTZWFyY2guLi5cIiB2YWx1ZT17dGhpcy5wcm9wcy5maWx0ZXJUZXh0fSAvPlxuICAgICAgICA8cD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2hlY2tlZD17dGhpcy5wcm9wcy5pblN0b2NrT25seX0gLz5cbiAgICAgICAgICB7JyAnfVxuICAgICAgICAgIE9ubHkgc2hvdyBwcm9kdWN0cyBpbiBzdG9ja1xuICAgICAgICA8L3A+XG4gICAgICA8L2Zvcm0+XG4gICAgKTtcbiAgfVxufSk7XG5cbnZhciBGaWx0ZXJhYmxlUHJvZHVjdFRhYmxlID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICBmaWx0ZXJUZXh0OiAnJyxcbiAgICAgIGluU3RvY2tPbmx5OiBmYWxzZVxuICAgIH07XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPFNlYXJjaEJhclxuICAgICAgICAgIGZpbHRlclRleHQ9e3RoaXMuc3RhdGUuZmlsdGVyVGV4dH1cbiAgICAgICAgICBpblN0b2NrT25seT17dGhpcy5zdGF0ZS5pblN0b2NrT25seX1cbiAgICAgICAgLz5cbiAgICAgICAgPFByb2R1Y3RUYWJsZVxuICAgICAgICAgIHByb2R1Y3RzPXt0aGlzLnByb3BzLnByb2R1Y3RzfVxuICAgICAgICAgIGZpbHRlclRleHQ9e3RoaXMuc3RhdGUuZmlsdGVyVGV4dH1cbiAgICAgICAgICBpblN0b2NrT25seT17dGhpcy5zdGF0ZS5pblN0b2NrT25seX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn0pO1xuXG5cbnZhciBQUk9EVUNUUyA9IFtcbiAge2NhdGVnb3J5OiAnU3BvcnRpbmcgR29vZHMnLCBwcmljZTogJyQ0OS45OScsIHN0b2NrZWQ6IHRydWUsIG5hbWU6ICdGb290YmFsbCd9LFxuICB7Y2F0ZWdvcnk6ICdTcG9ydGluZyBHb29kcycsIHByaWNlOiAnJDkuOTknLCBzdG9ja2VkOiB0cnVlLCBuYW1lOiAnQmFzZWJhbGwnfSxcbiAge2NhdGVnb3J5OiAnU3BvcnRpbmcgR29vZHMnLCBwcmljZTogJyQyOS45OScsIHN0b2NrZWQ6IGZhbHNlLCBuYW1lOiAnQmFza2V0YmFsbCd9LFxuICB7Y2F0ZWdvcnk6ICdFbGVjdHJvbmljcycsIHByaWNlOiAnJDk5Ljk5Jywgc3RvY2tlZDogdHJ1ZSwgbmFtZTogJ2lQb2QgVG91Y2gnfSxcbiAge2NhdGVnb3J5OiAnRWxlY3Ryb25pY3MnLCBwcmljZTogJyQzOTkuOTknLCBzdG9ja2VkOiBmYWxzZSwgbmFtZTogJ2lQaG9uZSA1J30sXG4gIHtjYXRlZ29yeTogJ0VsZWN0cm9uaWNzJywgcHJpY2U6ICckMTk5Ljk5Jywgc3RvY2tlZDogdHJ1ZSwgbmFtZTogJ05leHVzIDcnfVxuXTtcblxuUmVhY3RET00ucmVuZGVyKFxuICA8RmlsdGVyYWJsZVByb2R1Y3RUYWJsZSBwcm9kdWN0cz17UFJPRFVDVFN9IC8+LFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFpbmVyJylcbik7Il19
