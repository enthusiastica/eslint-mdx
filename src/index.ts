import path from 'path'

export * from './helper'
export * from './parser'
export * from './regexp'
export * from './traverse'

export const configs = {
  recommended: {
    parser: path.resolve(__dirname, 'parser'),
    plugins: ['@rxts/mdx'],
    rules: {
      'react/react-in-jsx-scope': 0,
    },
  },
}
