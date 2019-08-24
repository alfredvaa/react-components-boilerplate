# React components boilerplate

[![Netlify Status](https://api.netlify.com/api/v1/badges/e0d3299d-9af5-4a9d-88c0-341df4dd4e77/deploy-status)](https://app.netlify.com/sites/sad-cori-cd330f/deploys)

## Scripts

### `yarn start`

Starts the storybook site for local development

### `yarn build`

Compiles source files into build directory with type annotations upon succesful lint and typescript rules passing.

### `yarn patch *module-name*`

Builds latest source of the specific module, bumps the patch version and publishes it to github packages (with a corresponding verison tag at github). To patch the Input component you should run `yarn patch Input` for example. There is also `yarn minor` and `yarn major` which does the same thing but updating minor or major version instead.
