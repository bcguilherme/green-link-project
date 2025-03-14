module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Encontrar e remover o fork-ts-checker-webpack-plugin
      const plugins = webpackConfig.plugins;
      const forkTsCheckerIndex = plugins.findIndex(
        (plugin) => plugin.constructor.name === 'ForkTsCheckerWebpackPlugin'
      );
      
      if (forkTsCheckerIndex > -1) {
        plugins.splice(forkTsCheckerIndex, 1);
      }
      
      return webpackConfig;
    },
    // Reduce a quantidade de trabalho que o webpack precisa fazer
    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000
    }
  },
  // Desabilitar source maps em desenvolvimento para melhorar performance
  devServer: {
    hot: false,
    liveReload: true
  }
}; 