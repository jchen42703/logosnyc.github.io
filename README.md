# Static Website

## Contributor Guide

- Uses SCSS and `include-media` for styling.

  - To use compile the scss, use `node-sass` and the command `node-sass static/scss -o static/css` in the `simple` directory.
  - To install `include-media`, run `npm install include-media` for the user and then use the appropriate `@import` for `scss/_include-media.scss`.

- The actual website (logosnyc.github.io) is located on the `build` branch, where the `css` is actually compiled and committed. Everything else is `scss`.
