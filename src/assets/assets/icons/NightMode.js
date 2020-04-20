

exports.__esModule = true;
exports.NightMode = void 0;

const _react = _interopRequireDefault(require("react"));

const _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (let i = 1; i < arguments.length; i++) { const source = arguments[i]; for (const key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const NightMode = function NightMode(props) {
  return _react.default.createElement(_StyledIcon.StyledIcon, {viewBox: "0 0 64 64",
    a11yTitle: "NightMode", ...props}, _react.default.createElement("g", {
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, _react.default.createElement("g", {
    transform: "translate(-342.000000, 0.000000)",
    fill: "#FFFFFF"
  }, _react.default.createElement("path", {
    d: "M374,0 C356.326888,0 342,14.326889 342,32 C342,49.673111 356.326888,64 374,64 C391.673111,64 406,49.673111 406,32 C406,14.326889 391.673111,0 374,0 Z M366.006094,31.597 C366.175095,26.634003 369.787094,22.648003 374.375095,22 C373.349157,22.918457 372.520666,24.035919 371.939964,25.284477 C371.359264,26.533035 371.038475,27.886627 370.997093,29.263 C370.810093,34.812 374.994095,39.467003 380.343094,39.662003 C380.897209,39.678627 381.451706,39.646168 382.000092,39.565002 C380.218094,41.153999 377.886093,42.086998 375.353096,41.993999 C370.003094,41.799 365.818094,37.144001 366.006094,31.597 Z"
  }))));
};

exports.NightMode = NightMode;