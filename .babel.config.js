let defaultPresets;

// We release a ES version of Material-UI.
// It's something that matches the latest official supported features of JavaScript.
// Nothing more (stage-1, etc), nothing less (require, etc).
if (process.env.BABEL_ENV === "es") {
  defaultPresets = [];
} else {
  defaultPresets = [
    [
      "@babel/preset-env",
      {
        modules: ["modules"].includes(process.env.BABEL_ENV) ? false : "commonjs"
      }
    ]
  ];
}

const defaultAlias = {
  "react-frontend_library": "./src"
};

module.exports = {
  presets: defaultPresets.concat(["@babel/preset-react"]),
  plugins: [
    ["@babel/plugin-proposal-class-properties", { loose: true }],
    ["@babel/plugin-proposal-object-rest-spread", { loose: true }],
    "@babel/plugin-transform-object-assign",
    "@babel/plugin-transform-runtime"
  ],
  ignore: [/@babel[\\|/]runtime/],
  env: {
    test: {
      sourceMaps: "both",
      plugins: [
        [
          "babel-plugin-module-resolver",
          {
            root: ["./"],
            alias: defaultAlias
          }
        ]
      ]
    },
    coverage: {
      plugins: [
        "babel-plugin-istanbul",
        [
          "babel-plugin-module-resolver",
          {
            root: ["./"],
            alias: defaultAlias
          }
        ]
      ]
    },
    development: {
      plugins: [
        [
          "babel-plugin-module-resolver",
          {
            alias: {
              modules: "./modules"
            }
          }
        ]
      ]
    },
    production: {
      plugins: [
        "transform-react-constant-elements",
        "transform-dev-warning",
        ["react-remove-properties", { properties: ["data-mui-test"] }],
        [
          "transform-react-remove-prop-types",
          {
            mode: "unsafe-wrap"
          }
        ]
      ]
    }
  }
};
