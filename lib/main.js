"use strict";

require("bootstrap/dist/css/bootstrap.min.css");
var _react = require("react");
var _client = require("react-dom/client");
var _App = _interopRequireDefault(require("./App.jsx"));
require("./index.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
(0, _client.createRoot)(document.getElementById('root')).render( /*#__PURE__*/React.createElement(_react.StrictMode, null, /*#__PURE__*/React.createElement(_App["default"], null)));