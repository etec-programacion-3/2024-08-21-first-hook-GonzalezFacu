"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactBootstrap = require("react-bootstrap");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
/**
 * IncrementButton component that triggers an increment in the counter.
 *
 * Props:
 * - onIncrement (function): Function to call when the button is clicked.
 */
var IncrementButton = function IncrementButton(_ref) {
  var onIncrement = _ref.onIncrement;
  return /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Button, {
    variant: "primary",
    onClick: onIncrement
  }, "Increment");
};
var _default = exports["default"] = IncrementButton;