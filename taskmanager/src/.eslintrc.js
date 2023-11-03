module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb"],
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["react"],
  rules: {
    "custom-function-naming": [
      "error",
      {
        prefix: "custom_",
      },
    ],
  },
};
