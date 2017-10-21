import * as autoprefixer from 'autoprefixer';
import * as gulp from 'gulp';
import * as flatten from 'gulp-flatten';
import * as postcss from 'gulp-postcss';
import * as sass from 'gulp-sass';
import * as sourcemaps from 'gulp-sourcemaps';
import * as project from '../aurelia.json';
import {build} from 'aurelia-cli';

export default function processCSS() {

  let processors = [
    autoprefixer()
  ];

  return gulp.src(project.cssProcessor.source)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss(processors))
    .pipe(flatten())
    .pipe(gulp.dest('assets/styles/dist'))
    .pipe(build.bundle());
};
