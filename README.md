# 11ty5

Eleventy 5tarter project. <br>
_A work & exploration in progress, made/maintained for own use but if it can help somebody else, cool._

```bash
git clone git@github.com:AndiKod/11ty5.git my-project
cd my-project
yarn install
yarn dev
yarn build
```

**Note:** Since updating to Node v16.0.0 non-harming yet annoying warnings were seen in the terminal. Some of them are gone, one is still here, as the node-dependency repository causing it ...is archived and inactive.

`DeprecationWarning: Invalid 'main' field in '... \11ty5\node_modules\emitter-mixin\package.json'`

Warning is to be ignored so far, and looking forward for an update from "emitter-mixin" or NPM.

_Until that ...happy coding._

## Dependencies & Utilities:

- Eleventy - 0.12.1
- Tailwind - 2.1.1
- Rollup - 2.38.4
- Axios - 0.21.1
- Light/Dark [theme switch](https://medium.com/@haxzie/dark-and-light-theme-switcher-using-css-variables-and-pure-javascript-zocada-dd0059d72fa2)

## Eleventy plugins installed:

navigation, syntaxhighlight, cache-assets, rss, img, inclusive-language

_Feel free to opt-out those not needed, or ignore them._

## Default Layouts & Partials

- -- Layouts --
- Base
- Page
- Item _(aka, single-post, project, etc)_
- -- Partials --
- header _(auto nav menu via eleventy-navigation)_
- items-loop
- pagination
- tags _(auto updated list)_
- footer

### Say hi ;)

If you feel like talking, having questions or any other fair reason, come say hi on my Discord server: [https://discord.gg/RXQTyGbEAt](https://discord.gg/RXQTyGbEAt)
