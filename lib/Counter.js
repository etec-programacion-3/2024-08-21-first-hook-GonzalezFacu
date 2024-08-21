"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactBootstrap = require("react-bootstrap");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
/**
 * Counter component that displays the current count.
 *
 * Props:
 * - count (number): The current value of the counter.
 */
var Counter = function Counter(_ref) {
  var count = _ref.count;
  return /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Card, {
    className: "text-center"
  }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Card.Body, null, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Card.Title, null, "Counter"), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Card.Text, null, "The current count is: ", /*#__PURE__*/_react["default"].createElement("strong", null, count))));
};
var _default = exports["default"] = Counter;