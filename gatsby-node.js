exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.json5$/,
          use: ['json5-loader'],
        },
      ],
    },
  })
}
