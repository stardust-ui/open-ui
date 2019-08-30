import emoji from 'remark-emoji'
import images from 'remark-images'

export default {
  title: 'Open UI',
  mdPlugins: [images, emoji],
  ignore: [
    'README.md',
    'CHANGELOG.md',
    'CODE_OF_CONDUCT.md',
    'CONTRIBUTING.md',
    'LICENSE.md',
    'LICENSING.md',
    'TODO.md'
  ],
}
