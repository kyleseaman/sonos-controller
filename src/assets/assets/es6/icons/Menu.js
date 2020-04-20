import React from 'react';
import { StyledIcon } from '../StyledIcon';

function _extends() { _extends = Object.assign || function (target) { for (let i = 1; i < arguments.length; i++) { const source = arguments[i]; for (const key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
export var Menu = function Menu(props) {
  return React.createElement(StyledIcon, {viewBox: "0 0 18 12",
    a11yTitle: "Menu", ...props}, React.createElement("g", {
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("g", {
    transform: "translate(-575.000000, -258.000000)",
    fill: "#FFFFFF"
  }, React.createElement("g", {
    transform: "translate(575.000000, 258.000000)"
  }, React.createElement("polygon", {
    points: "0 2 0 0 18 0 18 2"
  }), React.createElement("polygon", {
    points: "0 7 18 7 18 5 0 5"
  }), React.createElement("polygon", {
    points: "0 12 18 12 18 10 0 10"
  })))));
};