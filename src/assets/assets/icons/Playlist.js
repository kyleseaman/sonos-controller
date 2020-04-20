

exports.__esModule = true;
exports.Playlist = void 0;

const _react = _interopRequireDefault(require("react"));

const _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (let i = 1; i < arguments.length; i++) { const source = arguments[i]; for (const key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const Playlist = function Playlist(props) {
  return _react.default.createElement(_StyledIcon.StyledIcon, {viewBox: "0 0 18 17",
    a11yTitle: "Playlist", ...props}, _react.default.createElement("g", {
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, _react.default.createElement("g", {
    transform: "translate(-712.000000, -340.000000)",
    fill: "#FFFFFF"
  }, _react.default.createElement("g", {
    transform: "translate(712.000000, 340.000000)"
  }, _react.default.createElement("path", {
    d: "M17.632,3.569997 C17.85,3.509997 18,3.312997 18,3.087997 L18,0.567996 C18,0.238998 17.688,-2e-06 17.371,0.084997 L14.371,0.886997 C14.152,0.945997 14,1.143997 14,1.369997 L14,11.673997 C13.335,11.070998 12.401001,10.767997 11.397,10.962997 C10.247001,11.185996 9.311001,12.120997 9.069,13.267997 C8.662001,15.197998 10.127001,16.917997 12,16.917997 C13.660001,16.917997 14.990001,15.576997 15,13.925997 L15,4.286996 L17.632,3.569997 Z"
  }), _react.default.createElement("path", {
    d: "M0.5,4.927797 L11.5,4.927797 C11.776,4.927797 12,4.703797 12,4.427797 L12,3.427797 C12,3.151797 11.776,2.927797 11.5,2.927797 L0.5,2.927797 C0.225,2.927797 0,3.151797 0,3.427797 L0,4.427797 C0,4.703797 0.225,4.927797 0.5,4.927797 Z"
  }), _react.default.createElement("path", {
    d: "M0.5,8.927797 L11.5,8.927797 C11.776,8.927797 12,8.703797 12,8.427797 L12,7.427797 C12,7.151797 11.776,6.927797 11.5,6.927797 L0.5,6.927797 C0.225,6.927797 0,7.151797 0,7.427797 L0,8.427797 C0,8.703797 0.225,8.927797 0.5,8.927797 Z"
  }), _react.default.createElement("path", {
    d: "M6.5,12.927797 L0.5,12.927797 C0.225,12.927797 0,12.703797 0,12.427797 L0,11.427797 C0,11.151797 0.225,10.927797 0.5,10.927797 L6.5,10.927797 C6.776,10.927797 7,11.151797 7,11.427797 L7,12.427797 C7,12.703797 6.776,12.927797 6.5,12.927797 Z"
  })))));
};

exports.Playlist = Playlist;