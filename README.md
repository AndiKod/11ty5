# 11ty5

Eleventy 5tarter project. <br>
_A work & exploration in progress_

1. `git clone git@github.com:AndiKod/11ty5.git my-project`
2. `cd my-project`
3. `yarn install`
4. `yarn dev` to serve the site on localhost:8080.
5. `yarn build` to build the site into /dist folder.

## Plugins installed:

- eleventy-navigation
- eleventy-plugin-syntaxhighlight
- eleventy-cache-assets
- eleventy-plugin-rss
- eleventy-img
- eleventy-plugin-inclusive-language

_Feel free to opt-out those not needed, or ignore them._

## Dependencies & Utilities:

- Rollup
- Tailwind
- Axios
- Light/Dark theme switch

## Default Layouts & Partials

- Base
- Page
- Item (aka, single-post, project, etc)

- header (auto nav menu via eleventy-navigation)
- items-loop
- pagination
- tags (auto updated list)
- footer
