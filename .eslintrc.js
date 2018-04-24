// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // check if imports actually resolve
  'settings': {
    'import/resolver': {
      'webpack': {
        'config': 'build/webpack.base.conf.js'
      }
    }
  },
  // add your custom rules here
  'rules': {
    'no-console': 0,
    'max-len': 0,
    'import/no-dynamic-require': 0,
    'import/no-unresolved': 0,
    'global-require': 0,
    'prefer-const': 1,
    'prefer-template': 0,
    'no-param-reassign': 1,
    'no-use-before-define': 0,
    'no-lonely-if': 1,
    'no-unused-expressions': 1,
    'no-underscore-dangle': 0,
    "consistent-return": 0,//return 后面是否允许省略
    "no-use-before-define": 2,//未定义前不能使用
    'quote-props': 0,
    'no-plusplus': 0,
    "comma-dangle": [2, "never"], //对象字面量项尾不能有逗号
    "semi": [2, "always"],//语句强制分号结尾
    'space-before-function-paren': 0,
    'no-shadow': 0,
    "import/extensions": [2, { "js": "never", "vue": "never" }], // 引入不需要加js后缀和vue后缀
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      'optionalDependencies': ['test/unit/index.js']
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
