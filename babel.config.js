module.exports = function (api) {
  api.cache(true);
  const plugins = [[
    'module-resolver',
    {
      root: ['./src'],
      alias: {
        '@assets': './src/assets',
        '@components': './src/components',
        '@routes': './src/routes',
        '@screens': './src/screens',
        '@storage': './src/storage',
        '@utils': './src/utils',
        '@shared': './src/shared',
        '@theme': './src/shared/theme'
      },
    },
  ],
  ];

  return {
    presets: ['babel-preset-expo'],

    plugins,
  };
};
