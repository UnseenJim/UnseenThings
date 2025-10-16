module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("_redirects");
  eleventyConfig.addPassthroughCopy("Logo.svg");
  eleventyConfig.addPassthroughCopy("Logo32.png");
  eleventyConfig.addPassthroughCopy("Logo16.png");
  eleventyConfig.addPassthroughCopy("Logo180.png"); // if you use it for Apple touch


  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site"
    }
  };
};
