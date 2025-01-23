const pluginRss = require("@11ty/eleventy-plugin-rss");
const inclusiveLangPlugin = require("@11ty/eleventy-plugin-inclusive-language");

module.exports = function(eleventyConfig) {
  // Copypasta
  // eleventyConfig.addPassthroughCopy("js.js");

  // Copypasta assets
  eleventyConfig.addPassthroughCopy("assets/**.*");

  // Watchers
  eleventyConfig.addWatchTarget("./css/");

  // Collections
  eleventyConfig.addCollection('posts', collection => {
    return collection.getFilteredByGlob('./posts/*.md')
    .filter(draftPosts)
    .reverse();
  });

  // Filters
  eleventyConfig.addFilter("prettyDate", (date) => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const newDate = new Date(date);

    return `${months[newDate.getMonth()]} ${newDate.getFullYear()}`;
  });

  eleventyConfig.addFilter("limit", (arr, to) => {
    return arr.slice(0, to);
  });

  // {
  //  page: { date } // Eleventy.page
  //  data: { title, tags, date } // data in frontmatter
  //  content: { } // string of html
  // }
  eleventyConfig.addFilter("sortCollection", (posts) => {
    return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
  });

  // Plugins
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(inclusiveLangPlugin);
};

function draftPosts(post) {
  return !(post.url).includes('drafts');
}