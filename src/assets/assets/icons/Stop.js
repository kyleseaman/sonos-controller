

exports.__esModule = true;
exports.Stop = void 0;

const _react = _interopRequireDefault(require("react"));

const _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (let i = 1; i < arguments.length; i++) { const source = arguments[i]; for (const key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const Stop = function Stop(props) {
  return _react.default.createElement(_StyledIcon.StyledIcon, {viewBox: "0 0 64 64",
    a11yTitle: "Stop", ...props}, _react.default.createElement("g", {
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, _react.default.createElement("g", {
    fill: "#FFFFFF"
  }, _react.default.createElement("path", {
    d: "M32,0 C14.326888,0 0,14.326889 0,32 C0,49.673111 14.326888,64 32,64 C49.673111,64 64,49.673111 64,32 C64,14.326889 49.673111,0 32,0 Z M22,20.5 C22,20.223858 22.223858,20 22.5,20 L41.5,20 C41.776142,20 42,20.223858 42,20.5 L42,43.5 C42,43.776142 41.776142,44 41.5,44 L22.5,44 C22.223858,44 22,43.776142 22,43.5 L22,20.5 Z"
  }))));
};

exports.Stop = Stop;