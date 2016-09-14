import gulp from 'gulp';
import browserify from 'browserify';
import babelify from 'babelify';
import BrowserSync from 'browser-sync';
import nodemon from 'gulp-nodemon';
import source from 'vinyl-source-stream';
import runSequence from 'run-sequence';

const browserSync = BrowserSync.create();
const reload = browserSync.reload;

var path = {
  html: {
    watch: './client/**/*.html'
  },
  js: {
    app: './client/scripts/app.js',
    watch: './client/**/*.js',
    dist: './client/build'
  },
  jsx: {
    watch: './client/scripts/views/**/*.jsx'
  }
};

gulp.task('babelify', () => {
  browserify(path.js.app, { debug: true, extensions: ['.jsx'] })
    .transform(babelify.configure({
      presets: ["react"]
    }))
    .transform('browserify-shim', { global: true })
    .bundle()
    .on('error', err => { console.log(`Error: ${err.message}`); })
    .pipe(source('bundle.js'))
    .pipe(gulp.dest(path.js.dist))
    .pipe(reload({ stream: true }));
});


gulp.task('browser-sync', () => {
  browserSync.init(null, {
    server: {
      baseDir: './client/'
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


gulp.task('watch', () => {
  gulp.watch(path.html.watch, e => runSequence(() => reload()));
  gulp.watch(path.jsx.watch, e => runSequence('babelify', () => reload()));
  gulp.watch(path.js.app, e => runSequence('babelify', () => reload()));
});


gulp.task('default', () => {
  runSequence(
    'babelify',
    'browser-sync',
    'watch'
  );
});