const siteSettings = require('./src/data/site.json');
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const eleventyNavigationPlugin = require('@11ty/eleventy-navigation');
const inclusiveLangPlugin = require('@11ty/eleventy-plugin-inclusive-language');

module.exports = (eleventyConfig) => {
  // Navigation
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  // Code Highlights
  eleventyConfig.addPlugin(syntaxHighlight, {
    // Change which Eleventy template formats use syntax highlighters
    templateFormats: ['*'], // default

    // e.g. Use syntax highlighters in njk and md Eleventy templates (not liquid)
    templateFormats: ['njk', 'md'],

    // Added in 3.0, set to true to always wrap lines in `<span class="highlight-line">`
    // The default (false) only wraps when line numbers are passed in.
    alwaysWrapLineHighlights: false,

    // Added in 3.0.2, set to false to opt-out of pre-highlight removal of leading
    // and trailing whitespace
    trim: true,

    // Added in 3.0.4, change the separator between lines (you may want "\n")
    lineSeparator: '<br>',
  });

  // Inclusive language check
  eleventyConfig.addPlugin(inclusiveLangPlugin, {
    templateFormats: ['md'], // default, add more file extensions here

    // accepts an array or a comma-delimited string
    words:
      'simply,obviously,basically,of course,clearly,just,everyone knows,however,easy',
  });

  // Extracting the list of available Tags inside Posts
  eleventyConfig.addCollection('tagList', function (collection) {
    let tagSet = new Set();
    collection.getAll().forEach(function (item) {
      if ('tags' in item.data) {
        let tags = item.data.tags;

        tags = tags.filter(function (item) {
          switch (item) {
            // this list should match the `filter` list in tags.njk
            case 'all':
            case 'nav':
            case 'post':
            case 'posts':
            case 'link':
            case 'item':
              return false;
          }

          return true;
        });

        for (const tag of tags) {
          tagSet.add(tag);
        }
      }
    });

    // returning an array in addCollection works in Eleventy 0.5.3
    return [...tagSet];
  });

  eleventyConfig.addPlugin(require('@11ty/eleventy-plugin-rss'));
  eleventyConfig.addFilter('dateDisplay', require('./filters/date-display.js'));

  eleventyConfig.addPassthroughCopy({ public: './' });
  eleventyConfig.addPassthroughCopy('admin');

  // ----------------- Shortcodes ----------------------- //

  // --- Youtube --- //
  eleventyConfig.addShortcode('YouTube', (options = {}) => {
    const { video = 'm1k3Cpke4yU' } = options;

    return `<iframe width="560" height="315" src="https://www.youtube.com/embed/${video}" 
    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;
     picture-in-picture" allowfullscreen></iframe>`;
  });

  // --- Twitter --- //
  eleventyConfig.addShortcode('Twitter', (options = {}) => {
    const { tweet = '' } = options;

    return `<blockquote class="twitter-tweet"><p lang="en" dir="ltr"><a href="https://twitter.com/${tweet}"></a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`;
  });

  // ----------------- END Shortcodes ----------------------- //

  eleventyConfig.setBrowserSyncConfig({
    files: ['dist/**/*'],
    open: true,
  });

  eleventyConfig.setDataDeepMerge(true);

  eleventyConfig.addCollection('postsWithoutDrafts', (collection) =>
    [...collection.getFilteredByGlob('src/items/posts/*.md')].filter(
      (post) => !post.data.draft
    )
  );

  return {
    pathPrefix: siteSettings.baseUrl,
    dir: {
      input: 'src',
      output: 'dist',
      includes: 'includes',
      layouts: 'layouts',
      data: 'data',
    },
  };
};
