const {
  override,
  addWebpackPlugin,
  addBabelPlugins,
  fixBabelImports
} = require("customize-cra");
// 参考：https://github.com/timsayshey/vuera-react-vue-demo-app/commit/e169832cce222c201421db005fb9f924f9b80999
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const addWebpackModuleRule = () => config => {
  // modify rule of file-loader
  const rule = config.module.rules[2];
  rule.oneOf[rule.oneOf.length - 1].exclude = [
    /\.(js|mjs|jsx|ts|tsx|vue)$/,
    /\.html$/,
    /\.json$/
  ];

  // add vue-loader
  config.module.rules.push({
    test: /\.vue$/,
    loader: "vue-loader"
  });
  return config;
};

module.exports = override(
  addBabelPlugins("vuera/babel"),
  addWebpackPlugin(new VueLoaderPlugin()),
  addWebpackModuleRule(),
  fixBabelImports("import", {
    libraryName: "ant-design-vue",
    libraryDirectory: "es",
    style: "css"
  })
);
