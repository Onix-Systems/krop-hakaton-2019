const mix = require('laravel-mix');

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
  .sass('resources/scss/vendor.scss', 'public/css')
  .sass('resources/scss/about-us-and-tc.scss', 'public/css')


if (mix.inProduction()) {
  mix.version();
}

mix.browserSync({
  proxy: 'localhost:80',
  host: '0.0.0.0',
  open: false
});

mix.disableNotifications();
