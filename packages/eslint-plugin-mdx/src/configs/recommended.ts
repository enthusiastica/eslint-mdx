import { version } from 'eslint/package.json'

import { base } from './base'

const minorVersion = +version
  .split('.')
  .slice(0, 2)
  .join('.')

export const recommended = {
  ...base,
  rules: {
    'mdx/no-jsx-html-comments': 2,
    'mdx/no-unescaped-entities': 1,
    'mdx/no-unused-expressions': 2,
    'mdx/remark': 1,
    'no-unused-expressions': 0,
    'react/no-unescaped-entities': 0,
  },
}

// overrides in npm pkg is supported after v6.4.0
if (minorVersion >= 6.4) {
  const overrides: Array<{
    files: string | string[]
    extends?: string | string[]
    rules?: Record<string, number | [number, unknown]>
  }> = [
    {
      files: '*.mdx',
      extends: 'plugin:mdx/overrides',
    },
  ]
  try {
    // eslint-disable-next-line node/no-extraneous-require
    require.resolve('prettier')
    // eslint-disable-next-line node/no-extraneous-require
    require.resolve('eslint-plugin-prettier')
    overrides.push({
      files: '*.md',
      rules: {
        'prettier/prettier': [
          2,
          {
            parser: 'markdown',
          },
        ],
      },
    })
  } catch (e) {}
  Object.assign(recommended, {
    overrides,
  })
}
