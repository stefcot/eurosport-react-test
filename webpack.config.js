const merge = require('webpack-merge');

// Import default (base) config file
const defaultConfig = require('./webpack/base');

// Our export should be a function rather than an object
module.exports = env => {
  // If env param is not passed, check environment variable, otherwise fall back to "dev"
  if (!env) {
    env = process.env.NODE_ENV || 'development';
  }

  try {
    // Try loading the environment config
    const envConfig = require(`./webpack/${env}`);
    // and then return
    return merge(defaultConfig, envConfig);
  } catch (err) {
    // If the file can't be loaded throw an error
    console.error(`Could not load "${env}" environment config!`);
  }
};
