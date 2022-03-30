# OPAL Docs site
This repository contains the source code to our docs site at [docs.opal.ac](https://docs.opal.ac).

### Writing docs
* Docs are located in the `docs/` folder
* All docs must be in the `md` format (markdown) or the `mdx` format (Markdown with react)
* Check out [this tutorial](https://docusaurus.io/docs/create-doc) on how to write docs
* You can configure the sidebar by editing `sidebars.js` (as shown in [this tutorial](https://docusaurus.io/docs/sidebar))

### Local Development
This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

To install the required NPM packages run:
```sh
yarn
```

To Start the docs website on port 3000 run:
```sh
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

This command generates static content into the `build` directory and can be served using any static contents hosting service:

```
$ yarn build
```

### Deploy

Merging new code to master will auto-deploy to [netlify](https://app.netlify.com/sites/permitio-docs/overview).
