import emoji from 'remark-emoji'
import images from 'remark-images'

const PROD = process.env.NODE_ENV === 'production'

export default {
  title: 'Open UI',
  mdPlugins: [images, emoji],
  base: PROD ? '/specifications/' : '/',
  ignore: [
    'README.md',
    'CHANGELOG.md',
    'CODE_OF_CONDUCT.md',
    'CONTRIBUTING.md',
    'LICENSE.md',
    'LICENSING.md',
    'TODO.md',
  ],
}
