

exports.__esModule = true;
exports.Pause = void 0;

const _react = _interopRequireDefault(require("react"));

const _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (let i = 1; i < arguments.length; i++) { const source = arguments[i]; for (const key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const Pause = function Pause(props) {
  return _react.default.createElement(_StyledIcon.StyledIcon, {viewBox: "0 0 64 64",
    a11yTitle: "Pause", ...props}, _react.default.createElement("g", {
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, _react.default.createElement("g", {
    transform: "translate(-114.000000, 0.000000)",
    fill: "#FFFFFF"
  }, _react.default.createElement("path", {
    d: "M146,0 C128.326888,0 114,14.326889 114,32 C114,49.673111 128.326888,64 146,64 C163.673111,64 178,49.673111 178,32 C178,14.326889 163.673111,0 146,0 Z M155,20.75 C155,20.335999 154.495998,20 153.875,20 L151.625,20 C151.004002,20 150.5,20.335999 150.5,20.75 L150.5,43.25 C150.5,43.664001 151.004002,44 151.625,44 L153.875,44 C154.495998,44 155,43.664001 155,43.25 L155,20.75 Z M141.5,20.75 C141.5,20.335999 140.996,20 140.375,20 L138.125,20 C137.504,20 137,20.335999 137,20.75 L137,43.25 C137,43.664001 137.504,44 138.125,44 L140.375,44 C140.996,44 141.5,43.664001 141.5,43.25 L141.5,20.75 Z"
  }))));
};

exports.Pause = Pause;