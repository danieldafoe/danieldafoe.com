const { feedPlugin } = require("@11ty/eleventy-plugin-rss");
const inclusiveLangPlugin = require("@11ty/eleventy-plugin-inclusive-language");

module.exports = function(eleventyConfig) {
  // Copypasta assets
  eleventyConfig.addPassthroughCopy("assets/**.*");

  // Add watchers for non template stuff
  eleventyConfig.addWatchTarget("./css/");

  // Add collection excluding drafts
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
  eleventyConfig.addPlugin(inclusiveLangPlugin);

  // RSS feed generation
  eleventyConfig.addPlugin(feedPlugin, {
		type: "atom", 
		outputPath: "feed.xml",
		collection: {
			name: "posts",
			limit: 0
		},
		metadata: {
			language: "en",
			title: "Daniel R. Dafoe",
			subtitle: "Musings on usability, philosophy, and anything else that grips me.",
			base: "https://danieldafoe.com/",
			author: {
				name: "Daniel R. Dafoe"
			}
		}
	});
};

function draftPosts(post) {
  return !(post.url).includes('drafts');
}