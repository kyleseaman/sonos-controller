

exports.__esModule = true;
exports.Queue = void 0;

const _react = _interopRequireDefault(require("react"));

const _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (let i = 1; i < arguments.length; i++) { const source = arguments[i]; for (const key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const Queue = function Queue(props) {
  return _react.default.createElement(_StyledIcon.StyledIcon, {viewBox: "0 0 19 14",
    a11yTitle: "Queue", ...props}, _react.default.createElement("g", {
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, _react.default.createElement("g", {
    transform: "translate(-539.000000, -201.000000)",
    fill: "#FFFFFF"
  }, _react.default.createElement("g", {
    transform: "translate(539.000000, 201.000000)"
  }, _react.default.createElement("path", {
    d: "M0,0.401 C0,0.164 0.199,0 0.411,0 C0.494,0 0.579,0.025 0.655,0.081 L2.837,1.68 C3.055,1.84 3.055,2.16 2.837,2.32 L0.655,3.919 C0.579,3.975 0.494,4 0.411,4 C0.199,4 0,3.836 0,3.599 L0,0.401 Z"
  }), _react.default.createElement("path", {
    d: "M18.5002,1 L5.5002,1 C5.2242,1 5.0002,1.224 5.0002,1.5 L5.0002,2.5 C5.0002,2.776 5.2242,3 5.5002,3 L18.5002,3 C18.776199,3 19.0002,2.776 19.0002,2.5 L19.0002,1.5 C19.0002,1.224 18.776199,1 18.5002,1 Z"
  }), _react.default.createElement("path", {
    d: "M0.475002,12 C0.212802,12 0,12.224 0,12.5 L0,13.5 C0,13.776 0.212802,14 0.475002,14 L18.525002,14 C18.787201,14 19,13.776 19,13.5 L19,12.5 C19,12.224 18.787201,12 18.525002,12 L0.475002,12 Z"
  })))));
};

exports.Queue = Queue;