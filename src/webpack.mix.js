const mix = require('laravel-mix');
require('laravel-mix-svg-sprite');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
  .react('resources/js/app.js', 'public/js')
  .extract([
    'react', 'react-dom', 'react-router-dom', 'semantic-ui-react'
  ]);

mix
  .sass('resources/scss/app.scss', 'public/css')
  .copy('node_modules/semantic-ui-css/semantic.min.css','public/css/semantic.min.css')
  .copy(
    'node_modules/semantic-ui-css/themes/default/assets/fonts/icons.woff2',
    'public/css/themes/default/assets/fonts/icons.woff2'
  )
  .copy(
    'node_modules/semantic-ui-css/themes/default/assets/fonts/icons.woff',
    'public/css/themes/default/assets/fonts/icons.woff'
  )
  .copy(
    'node_modules/semantic-ui-css/themes/default/assets/fonts/icons.ttf',
    'public/css/themes/default/assets/fonts/icons.ttf'
  )
  .svgSprite(
    'resources/svg', // The directory containing your SVG files
    'public/img/svg', // The output path for the sprite
  );


if (mix.inProduction()) {
  mix.version();
}

mix.browserSync({
  proxy: 'localhost:80',
  host: '0.0.0.0',
  open: false
});

mix.disableNotifications();
