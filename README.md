# React Hot Loader got deprecated! Use e.g. [electron-react-boilerplate](https://github.com/electron-react-boilerplate/electron-react-boilerplate) instead of this.

# rhl-electron-quick-start

Based on [electron-quick-start](https://github.com/electron/electron-quick-start) (read their 
README as well if you're new to Electron), this repo provides a very basic React Hot Loader setup.

Presentation is quite rough around the edges, since there is no styling whatsoever but 
it works well. :wink:

## Additions compared to electron-quick-start:

- babel configuration
- webpack configurations for development/production
- webpack-dev-middleware and webpack-hot-middleware in the server-side part of the app
- React dev tools for Electron via [electron-devtools-installer](https://github.com/MarshallOfSound/electron-devtools-installer)
- Example React components to experiment with
- .editorconfig

## To Use

- Download or clone this repository
- Install the dependencies
- Run `yarn start:dev` for development, `yarn start` for production
