module.exports = function (eleventyConfig) {
  // Copy static assets
  eleventyConfig.addPassthroughCopy("./assets");
  eleventyConfig.addPassthroughCopy("CNAME");
  eleventyConfig.addPassthroughCopy(".nojekyll");

  return {
    dir: {
      input: ".",   // or "src" if you're using a source folder
      output: "_site"
    },
    pathPrefix: ""  // Empty for custom domain (not /repo-name/)
  };
};

