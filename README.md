# Static Website

## Contributor Guide

- Uses SCSS and `include-media` for styling.

  - To use compile the scss, use `node-sass` and the command `node-sass static/scss -o static/css` in the root directory.
    - To output compressed css, run `node-sass static/scss -o static/css --output-style compressed`.
  - To install `include-media`, run `npm install include-media` for the user and then use the appropriate `@import` for `scss/vendor/s_include-media.scss`.

- The actual website (logosnyc.github.io) is located on the `build` branch, where the `css` is actually compiled and committed. Everything else is `scss`.

- With the 5-1 file structure, all of the classes are imported into `scss/styles.scss` and the `css` is located in `css/styles.scss`.
  - So, for the `head`, you only need the `styles.css` and `fontawesome` stylesheets:
  ```
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="../static/css/styles.css" />
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.15.1/css/all.css"
      integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp"
      crossorigin="anonymous"
    />
    <title>INSERT TITLE</title>
  </head>
  ```
