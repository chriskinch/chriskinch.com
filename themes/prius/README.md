# Prius 

## Dependencies

The dependencies are:

* Node JS – http://nodejs.org

* Bower – http://bower.io

* Gulp Js – http://gulpjs.com

## Project Setup  

1. Install Node dependencies 

     $ npm install

2. Install Bower dependencies

     $ bower install

## Usage

Compile SCSS to CSS from src/scss/style.scss to build/css/style.css and use Autoprefixer so frameworks like Compass and Bourbon can be mostly avoided.

Compile JavaScript from ./js/main.ts to build/scripts/main.js

Minify images and move from ./images_source/* to ./images/*

$ gulp

That's it!