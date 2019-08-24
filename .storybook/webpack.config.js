const path = require('path');

module.exports = ({ config }) => {
  config.module.rules = config.module.rules.filter(
    f => f.test.toString() !== '/\\.css$/'
  );

  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loaders: ['awesome-typescript-loader', 'react-docgen-typescript-loader'],
    include: path.resolve(__dirname, '../'),
  });

  config.module.rules.push({
    test: /\.css$/,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          importLoaders: 1,
          modules: true,
          localIdentName: '[name]__[local]___[hash:base64:5]',
        },
      },
      'sass-loader',
    ],
    include: path.resolve(__dirname, '../'),
  });

  config.resolve.extensions.push('.ts', '.tsx');

  return config;
};
