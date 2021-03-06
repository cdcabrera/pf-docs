/**
 * FixMe: nested eslint configs have an issue with eslint-config-react-app and extending "react-app"
 * Specifically there's an aspect of 'eslint-config-react-app/base'.
 * For now pull facets directly.
 */
const {
  plugins: baseExtendedPlugins,
  overrides: baseExtendedOverrides,
  rules: baseExtendedRules
} = require('eslint-config-react-app/index');

const {
  plugins: baseJestPlugins,
  overrides: baseJestOverrides,
  ...baseJest
} = require('eslint-config-react-app/index');

const custom = {
  parser: '@babel/eslint-parser',
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    'jest/globals': true,
    node: true
  },
  plugins: ['import', 'jest', 'json', 'prettier', 'react'],
  parserOptions: {
    sourceType: 'module',
    requireConfigFile: false,
    babelOptions: {
      presets: [require.resolve('babel-preset-react-app/prod')]
    }
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  extends: [
    // 'react-app',
    'airbnb',
    'airbnb/hooks',
    'prettier'
  ],
  globals: {
    'client-routes': 'readonly',
    'client-styles': 'readonly',
    'generated-pf-docs': 'readonly'
  },
  rules: {
    'arrow-parens': ['error', 'as-needed'],
    'class-methods-use-this': 1,
    'comma-dangle': 0,
    'consistent-return': 1,
    'default-param-last': 0,
    'import/extensions': [
      'error',
      {
        json: 'always'
      }
    ],
    'import/first': 0,
    'import/newline-after-import': 0,
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true
      }
    ],
    'import/no-named-as-default': 0,
    'import/no-named-as-default-member': 0,
    'jest/no-done-callback': 0,
    'jest/prefer-to-have-length': 0,
    'jsx-a11y/click-events-have-key-events': 1,
    'jsx-a11y/no-noninteractive-element-interactions': 1,
    'max-len': [
      'error',
      {
        code: 240,
        ignoreUrls: true
      }
    ],
    'node/no-unsupported-features/es-syntax': 0,
    'no-case-declarations': 0,
    'no-console': 0,
    'no-continue': 0,
    'no-debugger': 1,
    'no-lonely-if': 1,
    'no-plusplus': 0,
    'no-promise-executor-return': 1,
    'no-restricted-exports': [1, { restrictedNamedExports: [] }],
    'no-restricted-properties': [0, { object: 'Math', property: 'pow' }],
    'no-underscore-dangle': 0,
    'no-unsafe-optional-chaining': 1,
    'prefer-exponentiation-operator': 0,
    'import/prefer-default-export': 1,
    'prefer-promise-reject-errors': 1,
    'prefer-regex-literals': 0,
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'avoid',
        singleQuote: true,
        trailingComma: 'none',
        printWidth: 120
      }
    ],
    'react/forbid-prop-types': 0,
    'react/function-component-definition': [
      2,
      { namedComponents: 'arrow-function', unnamedComponents: 'arrow-function' }
    ],
    'react/jsx-curly-newline': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-fragments': [1, 'element'],
    'react/jsx-props-no-spreading': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-no-constructed-context-values': 1,
    'react/jsx-no-useless-fragment': 1,
    'react/no-array-index-key': 1,
    'react/no-unused-prop-types': 1,
    'react/no-unused-state': 1,
    'react/no-unstable-nested-components': 0,
    'react/jsx-uses-vars': 'warn',
    'react/jsx-uses-react': 'warn',
    'react/prop-types': 1,
    'react/state-in-constructor': [1, 'never'],
    'space-before-function-paren': 0
  }
};

module.exports = {
  ...baseJest,
  ...custom,
  env: {
    ...custom.env
  },
  plugins: [...new Set([...baseExtendedPlugins, ...baseJestPlugins, ...custom.plugins])],
  extends: [...new Set([...custom.extends])],
  overrides: [...new Set([...baseExtendedOverrides, ...baseJestOverrides])],
  rules: {
    ...baseExtendedRules,
    ...custom.rules
  }
};
