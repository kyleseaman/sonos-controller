

exports.__esModule = true;
exports.Shuffle = void 0;

const _react = _interopRequireDefault(require("react"));

const _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (let i = 1; i < arguments.length; i++) { const source = arguments[i]; for (const key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const Shuffle = function Shuffle(props) {
  return _react.default.createElement(_StyledIcon.StyledIcon, {viewBox: "0 0 22 17",
    a11yTitle: "Shuffle", ...props}, _react.default.createElement("g", {
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, _react.default.createElement("g", {
    transform: "translate(-561.000000, -328.000000)",
    fill: "#FFFFFF"
  }, _react.default.createElement("g", {
    transform: "translate(561.000000, 328.000000)"
  }, _react.default.createElement("path", {
    d: "M18.333609,5.592583 C18.333609,6.001417 18.827692,6.205833 19.116442,5.917083 L21.606108,3.427416 C21.784859,3.24775 21.784859,2.958084 21.606108,2.778417 L19.116442,0.28875 C18.827692,-3.55271368e-15 18.333609,0.204417 18.333609,0.61325 L18.333609,2.18625 C14.581353,2.18625 12.504345,4.941389 10.494842,7.606982 L10.492441,7.610166 C8.152191,10.715833 5.734025,13.92325 0.450358,14.095583 C0.202858,14.103834 0.000275,14.297249 0.000275,14.54475 L0.000275,15.36425 C0.000275,15.726333 0.216608,15.93625 0.475108,15.928916 C6.658109,15.740164 9.587915,11.854934 11.954213,8.716976 L11.957274,8.712917 C13.932692,6.09125 15.493775,4.019583 18.333609,4.019583 L18.333609,5.592583 Z"
  }), _react.default.createElement("path", {
    d: "M0.451,3.110158 C4.53475,3.243075 6.80075,5.178158 8.481916,7.072908 L9.85325,5.856492 C8.018083,3.788492 5.302917,1.423492 0.47575,1.276825 C0.218167,1.268575 0,1.483075 0,1.740658 L0,2.657325 C0,2.905742 0.202583,3.101908 0.451,3.110158 Z"
  }), _react.default.createElement("path", {
    d: "M18.333151,11.613433 C18.333151,11.204601 18.827234,11.000184 19.115984,11.288933 L21.605652,13.7786 C21.785318,13.958267 21.785318,14.247934 21.605652,14.426684 L19.115984,16.917266 C18.827234,17.206016 18.333151,17.000684 18.333151,16.592767 L18.333151,14.970267 C15.385151,14.968434 13.546317,13.282684 12.137401,11.633601 L11.89815,11.352184 L13.192484,10.05785 L13.533484,10.446518 C15.165151,12.355017 16.557568,13.136017 18.333151,13.136934 L18.333151,11.613433 Z"
  })))));
};

exports.Shuffle = Shuffle;