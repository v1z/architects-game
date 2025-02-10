const mainConfig = require('./.eslintrc')

module.exports = {
  ...mainConfig,
  rules: {
    ...mainConfig.rules,
    quotes: 'off', // Это делает prettier, причем может вступать в конфликт с eslint
    'jsx-quotes': ['error', 'prefer-single'],
    'comma-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],
    'space-infix-ops': 'error',
    'react/jsx-boolean-value': ['error', 'always'],
    'quote-props': ['error', 'as-needed'],
    'prefer-const': 'error',
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'no-multi-spaces': 'error',
    'no-trailing-spaces': 'error',
    'object-curly-spacing': ['error', 'always'],
    'object-shorthand': ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
    'padded-blocks': ['error', 'never'],
    'arrow-spacing': ['error', { before: true, after: true }],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: ['multiline-const', 'multiline-let'] },
      { blankLine: 'always', prev: ['multiline-const', 'multiline-let'], next: '*' },
      { blankLine: 'always', prev: '*', next: ['if', 'for', 'while', 'switch', 'iife', 'do', 'throw'] },
      { blankLine: 'always', prev: ['if', 'for', 'while', 'switch', 'iife', 'do', 'throw'], next: '*' },
      { blankLine: 'always', prev: '*', next: 'export' },
      { blankLine: 'always', prev: '*', next: 'return' },
    ],
    'keyword-spacing': 'error',
    // TS stuff
    semi: 'off',
    '@typescript-eslint/semi': ['error', 'never'],
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'none',
          requireLast: false,
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false,
        },
      },
    ],
    // import stuff
    'import/first': 'error',
    'import/no-duplicates': 'error',
    // tests stuff
    'jest/prefer-to-be': 'error',
    'jest/prefer-to-contain': 'error',
    'jest/prefer-to-have-length': 'error',
    'jest-formatting/padding-around-all': 'error',
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/ban-types': 0,

    'jest/no-deprecated-functions': 0,
    'jest/valid-title': 0,
    'jest/no-conditional-expect': 0,
    'jest/no-standalone-expect': 0,

    // autofix
    indent: 'off',
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
    'react/jsx-indent': ['error', 2],
    '@typescript-eslint/indent': ['error', 2],
    'react/jsx-curly-brace-presence': [
      'error',
      {
        props: 'never',
        children: 'never',
      },
    ],
    'react/jsx-max-props-per-line': ['error', { maximum: 1, when: 'always' }],
    'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
    'react/jsx-closing-tag-location': 'error',
    'react/jsx-closing-bracket-location': 'error',
    'react/jsx-equals-spacing': 'error',
    'react/jsx-tag-spacing': ['error', { beforeClosing: 'never' }],
    'react/jsx-one-expression-per-line': ['error', { allow: 'single-child' }], // keep monitoring https://github.com/yannickcr/eslint-plugin-react/issues/2318
    'react/jsx-wrap-multilines': [
      'error',
      {
        declaration: 'parens-new-line',
        assignment: 'parens-new-line',
        return: 'parens-new-line',
        arrow: 'parens-new-line',
        condition: 'parens-new-line',
        logical: 'parens-new-line',
        prop: 'ignore',
      },
    ],
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          ['^react', '^\\w'],
          ['@tinkoff-boxy/stories-of-block'],
          ['^@'],
          ['^\\.\\./'],
          ['^\\./'],
          ['^.+\\.types$', '^.+\\.css$'],
        ],
      },
    ],
  },
  ignorePatterns: ['node_modules'],
}
