'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _newPortal = require('./newPortal.js');

var _newPortal2 = _interopRequireDefault(_newPortal);

require('./index.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SMLoding = function (_Component) {
  _inherits(SMLoding, _Component);

  function SMLoding() {
    _classCallCheck(this, SMLoding);

    return _possibleConstructorReturn(this, (SMLoding.__proto__ || Object.getPrototypeOf(SMLoding)).apply(this, arguments));
  }

  _createClass(SMLoding, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          color = _props.color,
          size = _props.size;

      var sizeStyle = {
        width: size + 'px',
        height: size + 'px'
      };
      var colorStyle = {
        border: '1px solid ' + color,
        borderColor: color + ' transparent transparent transparent'
      };
      var ringStyle = Object.assign({}, colorStyle, sizeStyle);
      return _react2.default.createElement(
        _newPortal2.default,
        null,
        _react2.default.createElement(
          'div',
          { className: 'loading', style: sizeStyle },
          _react2.default.createElement('div', { className: 'loading__ring', style: ringStyle }),
          _react2.default.createElement('div', { className: 'loading__ring', style: ringStyle }),
          _react2.default.createElement('div', { className: 'loading__ring', style: ringStyle })
        )
      );
    }
  }]);

  return SMLoding;
}(_react.Component);

exports.default = SMLoding;

SMLoding.defaultProps = {
  size: '36',
  color: '#000'
};