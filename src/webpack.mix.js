const mix = require('laravel-mix')

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
  .copy('node_modules/semantic-ui-css/semantic.min.js','public/js/semantic.min.js');

if (mix.inProduction()) {
  mix.version();
}

mix.browserSync({
  proxy: 'localhost:80',
  host: '0.0.0.0',
  open: false
});

mix.disableNotifications();
