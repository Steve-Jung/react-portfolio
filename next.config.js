const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['three']);
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const TerserJSPlugin = require('terser-webpack-plugin');

module.exports = withPlugins(
  [withTM],
  [withBundleAnalyzer({
    distDir: '.next',
    compress: true,
    optimization: {
      minimize: true,
      minimizer: [new TerserJSPlugin({
        include: /\.min\.js$/
      })]
    },
    webpack(config, { webpack }) {
      // 배포 환경인지?
      const prod = process.env.NODE_ENV === 'production';

      // 플러그인 관련 설정
      const plugins = [
        ...config.plugins,
        new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /^\.\/ko$/),
      ];

      config.module.rules.push(
        {
          test: /\.(glb|gltf)$/,
          use: {
            loader: 'file-loader',
          }
        },
        {
          test: /\.(glsl|vs|fs|vert|frag)$/,
          exclude: /node_modules/,
          use: {
            loader: 'raw-loader',
          }
        }
      );

      config.resolve.alias = {
        ...config.resolve.alias,
        // Will make webpack look for these modules in parent directories
        'three': require.resolve(__dirname, '.', 'node_modules', 'three'),
        // ...
      };

      return {
        ...config,
        mode: prod ? 'production' : 'development',
        devtool: prod ? 'hidden-source-map' : 'eval',
        plugins: plugins,
      };
    },
  })]
);
