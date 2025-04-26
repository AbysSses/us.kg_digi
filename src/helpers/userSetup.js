function userMarkdownSetup(md) {
  // The md parameter stands for the markdown-it instance used throughout the site generator.
  // Feel free to add any plugin you want here instead of /.eleventy.js
}
function userEleventySetup(eleventyConfig) {
  // The eleventyConfig parameter stands for the the config instantiated in /.eleventy.js.
  // Feel free to add any plugin you want here instead of /.eleventy.js
}
exports.userMarkdownSetup = userMarkdownSetup;
exports.userEleventySetup = userEleventySetup;

// 在src/helpers/userSetup.js中添加以下代码
module.exports = {
  beforeBuild: (eleventyConfig) => {
    // 将HomePage文件复制到输出目录
    eleventyConfig.addPassthroughCopy({ "homepage": "/" });
  },
  
  directoryOutputPlugin: (directoryOutputConfig) => {
    // 可以在这里添加自定义输出配置
    return directoryOutputConfig;
  },
  
  userComputation: (gardenData) => {
    // 返回数据供模板使用
    return {};
  },
};
