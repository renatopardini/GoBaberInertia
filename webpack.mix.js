const mix = require('laravel-mix');
const path = require('path');

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

mix.react('resources/js/app.js', 'public/js')
    // .sass('resources/sass/app.scss', 'public/css')
    .babelConfig({ plugins: ['@babel/plugin-syntax-dynamic-import'] })
    .webpackConfig({
        output: {
            chunkFilename: 'js/[name].js?id=[chunkhash]',
        },
        resolve: {
            alias: {
                '@': path.resolve('resources/js'),
                ziggy: path.resolve('vendor/tightenco/ziggy/src/js/route.js'),
            },
        },
    })

