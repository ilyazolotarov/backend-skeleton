const {readdirSync} = require('fs');
const {resolve} = require('path');

const functionsRoot = resolve(__dirname, './functions');

module.exports = (options, webpack) => {
  const functions = readdirSync(functionsRoot);
  const entry = {};
  functions.forEach(functionName => {
    entry[functionName] = resolve(functionsRoot, functionName, 'main.ts');
  });

  const lazyImports = [
    '@nestjs/microservices/microservices-module',
    '@nestjs/websockets/socket-module',
  ];

  return {
    ...options,
    target: 'node14.19',
    entry,
    output: {
      ...options.output,
      filename: '[name].js',
      library: {
        type: 'commonjs-static'
      }
    },
    externals: [],
    plugins: [
      ...options.plugins,
      new webpack.IgnorePlugin({
        checkResource(resource) {
          if (lazyImports.includes(resource)) {
            try {
              require.resolve(resource);
            } catch (err) {
              return true;
            }
          }
          return false;
        },
      }),
    ],
  };
};
