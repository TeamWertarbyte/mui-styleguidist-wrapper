# Minimal Material-UI styleguidist wrapper

This is a tiny component we use to create [React Styleguidist][styleguidist] guides for our [Material-UI] components with minimal effort.

[material-ui]: http://material-ui.com
[styleguidist]: https://react-styleguidist.js.org/

```
npm i --save-dev @wertarbyte/mui-styleguidist-wrapper
```

## Usage
1. Install the wrapper
   ```
   npm i --save-dev @wertarbyte/mui-styleguidist-wrapper
   ```
2. Add the following lines to the `scripts` section of the `package.json` file:
   ```
   "styleguide": "mui-styleguidist server",
   "styleguide:build": "mui-styleguidist build"
   ```
3. Use `npm run styleguide` to start a styleguidist server or `npm run styleguide:build` to build the styleguide.  
**The commands must be run from the project's root dir.**

You can customize the styleguide config by adding a `styleguide.config.js` file to the project's root dir. This file will be extended with our default values.
