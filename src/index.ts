import path from 'path'

export * from './helper'
export * from './parser'
export * from './regexp'
export * from './rules'
export * from './traverse'

export const configs = {
  recommended: {
    parser: path.resolve(__dirname, 'parser'),
    plugins: ['@rxts/mdx'],
    rules: {
      '@rxts/mdx/no-jsx-html-comments': 2,
      '@rxts/mdx/no-unescaped-entities': 1,
      '@rxts/mdx/no-unused-expressions': 2,
      'no-unused-expressions': 0,
      'react/no-unescaped-entities': 0,
      'react/react-in-jsx-scope': 0,
    },
  },
}
