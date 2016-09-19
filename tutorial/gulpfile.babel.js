import gulp from 'gulp';
import sass from 'gulp-sass';
import autoPrefixer from 'gulp-autoprefixer';
import cssMin from 'gulp-minify-css';
import plumber from 'gulp-plumber';
import nodemon from 'gulp-nodemon';
import browserify from 'browserify';
import babelify from 'babelify';
import BrowserSync from 'browser-sync';
import source from 'vinyl-source-stream';
import runSequence from 'run-sequence';

const browserSync = BrowserSync.create(),
      reload = browserSync.reload;

var path = {
  sass: {
    src: [
      './client/sass/**/*.scss',
      './client/sass/**/_*.scss'
    ],
    dist: './client/build',
    watch: [
      './client/sass/**/*.scss',
      './client/sass/**/_*.scss'
    ]
  },
  jsx: {
    app: './client/app.jsx',
    dist: './client/build',
    watch: './client/**/*.jsx'
  }
}

gulp.task('sass', () => {
  return gulp.src(path.sass.src)
    .pipe(plumber())
    .pipe(sass({
      style: 'extended'
    }))
    .pipe(autoPrefixer())
    .pipe(cssMin())
    .on('error', err => console.log(err.message))
    .pipe(gulp.dest(path.sass.dist));
});

gulp.task('babelify', () => {
  browserify(path.jsx.app, { debug: true })
    .transform(babelify)
    .bundle()
    .on('error', err => {
      console.log(`Error: ${err.message}`);
    })
    .pipe(source('bundle.js'))
    .pipe(gulp.dest(path.jsx.dist))
    .pipe(reload({ stream: true }));
});


gulp.task('browser-sync', () => {
  browserSync.init(null, {
    proxy: {
      target: 'http://localhost:5000'
    },
    port: 5000
  });
});


gulp.task('nodemon', cb => {
  let called = false;
  return nodemon({
    script: './server/server.js',
    ext: 'js html',
    ignore: ['./client', 'node_modules']
  })
  .on('start', () => {
    if (!called) {
      called = true;
      cb();
    }
  })
  .on('restart', () => {
    setTimeout(() => {
      reload;
    }, 500);
  });
});


gulp.task('watch', () => {
  gulp.watch('./client/index.html').on('change', reload);
  gulp.watch(path.sass.watch, e => runSequence('sass', () => reload()));
  gulp.watch(path.jsx.watch, e => runSequence('babelify', () => reload()));
});


gulp.task('default', () => {
  runSequence(
    'nodemon',
    ['sass', 'babelify'],
    'browser-sync',
    'watch'
  );
});