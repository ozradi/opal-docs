"use strict";

// Original: https://github.com/dracula/visual-studio-code
// Converted automatically using ./tools/themeFromVsCode
var theme = {
  plain: {
    color: "#fff",
    backgroundColor: "#000",
  },
  styles: [
    {
      types: ["prolog", "constant", "builtin"],
      style: {
        color: "#9bdbff",
      },
    },
    {
      types: ["inserted", "function"],
      style: {
        color: "#ee90a3",
      },
    },
    {
      types: ["deleted"],
      style: {
        color: "rgb(255, 85, 85)",
      },
    },
    {
      types: ["changed"],
      style: {
        color: "rgb(255, 184, 108)",
      },
    },
    {
      types: ["punctuation", "symbol"],
      style: {
        color: "rgb(248, 248, 242)",
      },
    },
    {
      types: ["string", "char", "tag", "selector"],
      style: {
        color: "rgb(96, 238, 164)",
      },
    },
    {
      types: ["keyword", "variable"],
      style: {
        color: "rgb(183, 168, 255)",
      },
    },
    {
      types: ["comment"],
      style: {
        color: "rgb(98, 114, 164)",
      },
    },
    {
      types: ["attr-name"],
      style: {
        color: "rgb(241, 250, 140)",
      },
    },
  ],
};

module.exports = theme;
