const { overrides } = require('@1stg/eslint-config/overrides')

require('ts-node').register({
  transpileOnly: true,
})

module.exports = {
  root: true,
  extends: ['@1stg'],
  overrides: [
    ...overrides,
    {
      files: '*.md',
      extends: ['plugin:mdx/recommended'],
      rules: {
        'prettier/prettier': 0, // FIXME: should be supported
      },
    },
    {
      files: '*.ts',
      rules: {
        '@typescript-eslint/unbound-method': 0, // See https://github.com/typescript-eslint/typescript-eslint/issues/636
      },
    },
  ],
}
