import { basename } from 'path'

import { CLIEngine } from 'eslint'

export const cli = new CLIEngine({
  ignore: false,
  fix: true,
})

describe('fixtures', () => {
  it('should match all snapshots', () => {
    cli
      .executeOnFiles(['test/fixtures/*.mdx'])
      .results.forEach(({ filePath, output, source }) =>
        expect(output || source).toMatchSnapshot(basename(filePath)),
      )
  })
})
