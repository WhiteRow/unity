const scripts = () => {
  return {
    module: {
      rules: [
        {
          test: /\.(tsx|ts|js)?$/,
          use: 'babel-loader',
          exclude: '/node_modules/',
        },
      ],
    },
  };
};

module.exports = scripts;
