module.exports = function (eleventyConfig) {
  // Keep copying assets to _site
  eleventyConfig.addPassthroughCopy("./assets");
  eleventyConfig.addPassthroughCopy("CNAME");

  return {
    dir: {
      input: ".",        // or "src" if you’re using a source folder
      output: "_site"
    },
    pathPrefix: "/steidl-lab-website/"
  };
};
