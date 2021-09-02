module.exports = {
  parser: "@babel/eslint-parser",
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'airbnb-base',
    'plugin:import/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  plugins: ['@babel','prettier', 'react', 'import', 'jest'],
  env: {
    "jest/globals": true,
    "browser": true,
  },
  rules: {
    "semi": "error",
    "arrow-body-style": "off",
    "prefer-arrow-callback": "off",
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'all',
      },
    ],
    'react/prop-types': [
      1,
      {
        ignore: ['context', 'tracking'],
      },
    ],
    'no-console': "off",
    'max-len': ["warn", { "code": 150 }],
    'import/first': "error",
    "import/prefer-default-export": "off",
    "no-param-reassign": ["error", {
      "props": false
    }],
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "@babel/new-cap": "error",
    "@babel/no-invalid-this": "error",
    "@babel/no-unused-expressions": "error",
  },
  settings: {
    react: {
      version: 'detect',
    }
  }

};
