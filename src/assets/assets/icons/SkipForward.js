

exports.__esModule = true;
exports.SkipForward = void 0;

const _react = _interopRequireDefault(require("react"));

const _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (let i = 1; i < arguments.length; i++) { const source = arguments[i]; for (const key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const SkipForward = function SkipForward(props) {
  return _react.default.createElement(_StyledIcon.StyledIcon, {viewBox: "0 0 24 24",
    a11yTitle: "SkipForward", ...props}, _react.default.createElement("g", {
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, _react.default.createElement("g", {
    transform: "translate(-86.000000, -216.000000)",
    fill: "#FFFFFF"
  }, _react.default.createElement("path", {
    d: "M107.749958,215.999878 L109.249973,215.999878 C109.663979,215.999878 109.999983,216.335882 109.999983,216.749886 L109.999983,239.250141 C109.999983,239.664147 109.663979,240.000235 109.249973,240.000235 L107.749958,240.000235 C107.335953,240.000235 106.999949,239.664147 106.999949,239.250141 L106.999949,228.021526 C106.993084,228.279771 106.862638,228.535097 106.607231,228.682503 L87.164013,239.89513 C86.645007,240.195133 86,239.817129 86,239.214123 L86,216.787369 C86,216.184363 86.645007,215.806358 87.164013,216.104862 L106.607231,227.318989 C106.862638,227.464936 106.993084,227.720225 106.999949,227.978468 L106.999949,216.749886 C106.999949,216.335882 107.335953,215.999878 107.749958,215.999878 Z"
  }))));
};

exports.SkipForward = SkipForward;