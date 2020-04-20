

exports.__esModule = true;
exports.SkipBack = void 0;

const _react = _interopRequireDefault(require("react"));

const _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (let i = 1; i < arguments.length; i++) { const source = arguments[i]; for (const key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const SkipBack = function SkipBack(props) {
  return _react.default.createElement(_StyledIcon.StyledIcon, {viewBox: "0 0 24 24",
    a11yTitle: "SkipBack", ...props}, _react.default.createElement("g", {
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, _react.default.createElement("g", {
    transform: "translate(-4.000000, -216.000000)",
    fill: "#FFFFFF"
  }, _react.default.createElement("path", {
    d: "M6.25,216 C6.664,216 7,216.336 7,216.75 L7,216.75 L7,239.25 C7,239.664 6.664,240 6.25,240 L6.25,240 L4.75,240 C4.336,240 4,239.664 4,239.25 L4,239.25 L4,216.75 C4,216.336 4.336,216 4.75,216 L4.75,216 Z M28,216.786126 L28,239.213218 C28,239.816234 27.355,240.194245 26.836,239.895738 L7.393,228.681441 C7.1305,228.531437 7,228.26593 7,228.000422 C7,227.734917 7.1305,227.469409 7.393,227.317905 L26.836,216.105109 C27.355,215.8051 28,216.18311 28,216.786126 Z"
  }))));
};

exports.SkipBack = SkipBack;