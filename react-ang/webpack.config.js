const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');
const webpack = require("webpack");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const dependencies = require("./package.json").dependencies;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, 'tsconfig.json'),
  [/* mapped paths to share */]);
module.exports = {
  output: {
    uniqueName: "angularShell",
    publicPath: "auto"
  },
  optimization: {
    runtimeChunk: false
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      "React": "react",
    }),
    new ModuleFederationPlugin({
        shared: {
         ...shareAll({
          singleton: true,
          strictVersion: true,
          requiredVersion: "auto"
         })
        }
})

  ],
};