

exports.__esModule = true;
exports.RoundCheckMarkEmpty = void 0;

const _react = _interopRequireDefault(require("react"));

const _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (let i = 1; i < arguments.length; i++) { const source = arguments[i]; for (const key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const RoundCheckMarkEmpty = function RoundCheckMarkEmpty(props) {
  return _react.default.createElement(_StyledIcon.StyledIcon, {viewBox: "0 0 22 22",
    a11yTitle: "RoundCheckMarkEmpty", ...props}, _react.default.createElement("g", {
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, _react.default.createElement("g", {
    transform: "translate(-526.000000, -449.000000)",
    fill: "#FFFFFF"
  }, _react.default.createElement("path", {
    d: "M537,449 C543.075132,449 548,453.924868 548,460 C548,466.075132 543.075132,471 537,471 C530.924868,471 526,466.075132 526,460 C526,453.924868 530.924868,449 537,449 Z M537,451 C532.029437,451 528,455.029437 528,460 C528,464.970563 532.029437,469 537,469 C541.970563,469 546,464.970563 546,460 C546,455.029437 541.970563,451 537,451 Z"
  }))));
};

exports.RoundCheckMarkEmpty = RoundCheckMarkEmpty;