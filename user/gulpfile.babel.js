import gulp from 'gulp';
import browserify from 'browserify';
import babelify from 'babelify';
import BrowserSync from 'browser-sync';
import nodemon from 'gulp-nodemon';
import source from 'vinyl-source-stream';

const browserSync = BrowserSync.create(),
      reload = browserSync.reload;

var path = {
  app: './app.js',
  js: {
    app: './src/js/app.js',
    src: './src/**/*.js',
    dist: './public/js'
  },
  jsx: {
    app: './src/app.jsx',
    watch: './src/jsx/**/*.jsx'
  }
};

gulp.task('babelify', () => {
  browserify(path.jsx.app, { debug: true })
    .transform(babelify.configure({
      presets: ["react"]
    }))
    .transform('browserify-shim', { global: true })
    .bundle()
    .on('error', err => {
      console.log(`Error: ${err.message}`);
    })
    .pipe(source('bundle.js'))
    .pipe(gulp.dest(path.js.dist))
    .pipe(reload({ stream: true }));
});


gulp.task('browser-sync', () => {
  browserSync.init(null, {
    server: {
      baseDir: './'
    },
    port: 9000,
    open: 'external'
  });
});


gulp.task('nodemon', cb => {
  let called = false;

  return nodemon({
    script: './app.js',
    ext: 'js html',
    ignore: [
      './public',
      './node_modules'
    ]
  })
  .on('start', () => {
    if (!called) {
      called = true;
      cb();
    }
  })
  .on('restart', () => {
    setTimeout(() => {
      reload();
    }, 500);
  });
});


gulp.task('default', ['babelify', 'browser-sync'], () => {
  gulp.watch('./public/index.html').on('change', reload);
  gulp.watch(path.jsx.watch).on('change', reload);
  gulp.watch(path.js.src, ['babelify']);
});