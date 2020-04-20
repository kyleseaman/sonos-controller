

exports.__esModule = true;
exports.VolumeOff = void 0;

const _react = _interopRequireDefault(require("react"));

const _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (let i = 1; i < arguments.length; i++) { const source = arguments[i]; for (const key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const VolumeOff = function VolumeOff(props) {
  return _react.default.createElement(_StyledIcon.StyledIcon, {viewBox: "0 0 8 14",
    a11yTitle: "VolumeOff", ...props}, _react.default.createElement("g", {
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, _react.default.createElement("g", {
    transform: "translate(-408.000000, -294.000000)",
    fill: "#FFFFFF"
  }, _react.default.createElement("path", {
    d: "M415.125,294.12433 L411,298 L408.5,298 C408.224,298 408,298.224 408,298.5 L408,303.49933 C408,303.77533 408.224,303.99933 408.5,303.99933 L411,303.99933 L415.171,307.90933 C415.525,308.14533 416,307.89133 416,307.46533 L416,294.53433 C416,294.082331 415.472,293.835331 415.125,294.12433 Z"
  }))));
};

exports.VolumeOff = VolumeOff;