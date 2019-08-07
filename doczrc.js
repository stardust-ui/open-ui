import webpackMerge from 'webpack-merge'
import images from 'remark-images'
import emoji from 'remark-emoji'

export default {
  base: '/specifications/',
  title: 'Open UI',
  description: 'The open standard for UI.',
  mdPlugins: [images, emoji],
  modifyBundlerConfig: config => {
    return webpackMerge(config, {
      module: {
        rules: [
          {
            test: /\.json5$/,
            exclude: /node_modules/,
            use: ['json5-loader'],
          },
        ],
      },
    })
  },
}
