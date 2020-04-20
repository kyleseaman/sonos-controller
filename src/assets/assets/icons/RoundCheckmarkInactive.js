

exports.__esModule = true;
exports.RoundCheckmarkInactive = void 0;

const _react = _interopRequireDefault(require("react"));

const _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (let i = 1; i < arguments.length; i++) { const source = arguments[i]; for (const key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const RoundCheckmarkInactive = function RoundCheckmarkInactive(props) {
  return _react.default.createElement(_StyledIcon.StyledIcon, {viewBox: "0 0 20 20",
    a11yTitle: "RoundCheckmarkInactive", ...props}, _react.default.createElement("g", {
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, _react.default.createElement("g", {
    transform: "translate(-490.000000, -414.000000)"
  }, _react.default.createElement("g", {
    transform: "translate(490.000000, 414.000000)"
  }, _react.default.createElement("mask", {
    fill: "white"
  }, _react.default.createElement("use", {
    xlinkHref: "#path-1"
  })), _react.default.createElement("g", null), _react.default.createElement("path", {
    d: "M18,10 C18,14.418278 14.418278,18 10,18 L10,22 C16.627417,22 22,16.627417 22,10 L18,10 Z M10,18 C5.581722,18 2,14.418278 2,10 L-2,10 C-2,16.627417 3.372583,22 10,22 L10,18 Z M2,10 C2,5.581722 5.581722,2 10,2 L10,-2 C3.372583,-2 -2,3.372583 -2,10 L2,10 Z M10,2 C14.418278,2 18,5.581722 18,10 L22,10 C22,3.372583 16.627417,-2 10,-2 L10,2 Z",
    fill: "#FFFFFF",
    mask: "url(#mask-2)"
  })))));
};

exports.RoundCheckmarkInactive = RoundCheckmarkInactive;