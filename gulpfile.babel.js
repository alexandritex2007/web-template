const gulp = require('gulp'),
  ect = require('gulp-ect'),
  sass = require('gulp-sass'),
  fiber = require('fibers'),
  notify = require('gulp-notify'),
  babel = require('gulp-babel'),
  webpackStream = require('webpack-stream'),
  webpack = require('webpack'),
  sourcemaps = require('gulp-sourcemaps'),
  autoprefixer = require('gulp-autoprefixer'),
  bulkSass = require('gulp-sass-bulk-import'),
  rename = require('gulp-rename'),
  frontnote = require('gulp-frontnote'),
  webp = require('gulp-webp'),
  imagemin = require('gulp-imagemin'),
  mozjpeg = require('imagemin-mozjpeg'),
  pngquant = require('imagemin-pngquant'),
  changed = require('gulp-changed'),
  spritesmith = require('gulp.spritesmith'),
  svgstore = require('gulp-svgstore'),
  cheerio = require('gulp-cheerio'),
  svgmin = require('gulp-svgmin'),
  path = require('path'),
  plumber = require('gulp-plumber'),
  browser = require('browser-sync');


const SRC = 'src',
      DIST = 'dist';
const ectConfig = require('./src/include/_const.js');

// file copy
gulp.task('copy', function() {
  return gulp.src(SRC + '/static/**/*.*', {
    base: 'src/static'
  })
  .pipe(gulp.dest(DIST));
});

// ect
gulp.task('ect', (done) => {
  gulp.src([SRC + '/ect/**/*.ect', '!src/ect/**/_*.ect'])
    .pipe(plumber())
    .pipe(ect({data(file, cb) {
        cb(ectConfig);
    }}))
    .pipe(gulp.dest(DIST))
    .pipe(browser.reload({stream:true}));
  done();

});

// Sass
sass.compiler = require("sass"); // Dart Sass = "sass"
gulp.task('sass', (done) => {
  gulp.src(SRC + '/sass/**/*.scss')
    .pipe(frontnote({
      out: 'dist/guide/',
      css: '../css/common.css',
      title: 'Style Guide'
    }))
    .pipe(plumber({
      errorHandler: notify.onError("Error: <%= error.message %>")
    }))
    .pipe(sourcemaps.init())
    .pipe(bulkSass())
    .pipe(sass({
      fiber: fiber,
      outputStyle: 'compressed'
    })) //nested,compact,expanded,compressed
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(sourcemaps.write('../maps/'))
    .pipe(gulp.dest(DIST + '/css'))
    .pipe(notify({
      title: 'Sassをコンパイルしました。',
      message: new Date().toLocaleString("ja"),
    }))
    .pipe(browser.reload({stream: true}))
  done();
});

//browser sync
gulp.task('server', (done) => {
  browser({
    server: {
      baseDir: DIST
    }
  });
  done();
});

// webpack
const webpackConfig = require('./webpack.config');

gulp.task('webpack', () => {
  return webpackStream(webpackConfig, webpack)
  .pipe(notify({
    title: 'jsをコンパイルしました。',
    message: new Date().toLocaleString("ja"),
  }))
  .pipe(plumber({
    errorHandler: notify.onError("Error: <%= error.message %>")
  }))
  .pipe(gulp.dest(DIST + '/js/'))
  .pipe(browser.reload({stream: true}))
});

//sprite-pc
gulp.task('sprite', (done) => {
  const spriteData = gulp.src(SRC + '/sprite/*.png')
  .pipe(spritesmith({
    imgName: 'sprite.png',
    cssName: '_sprite.scss',

    padding: 20,
    imgPath: '../assets/images/sprite.png',
    cssFormat: 'scss',
    algorithm:'top-down',
    cssOpts: {
      functions: false
    },
    cssVarMap(sprite) {
      sprite.name = 'sprite-' + sprite.name;
    }
  }));
  spriteData.img.pipe(gulp.dest(SRC + '/img/assets/'));
  spriteData.css.pipe(gulp.dest(SRC + '/sass/core/'));
  done();
});

//sprite_sp
gulp.task('sprite_sp', (done) => {
  const spriteData = gulp.src(SRC + '/sprite_sp/*.png')
    .pipe(spritesmith({
      imgName: 'sprite_sp.png',
      cssName: '_sprite_sp.scss',
      padding: 20,
      imgPath: '../assets/images/sprite_sp.png',
      cssFormat: 'scss',
      algorithm:'top-down',
      cssOpts: {
        functions: false
      },
      cssVarMap(sprite) {
        sprite.name = 'sprite-' + sprite.name;
      }
    }));
  spriteData.img.pipe(gulp.dest(SRC + '/img/assets/'))
  spriteData.css.pipe(gulp.dest(SRC + '/sass/core/'));
  done();
});

gulp.task('webp', function () {
	return gulp
		.src('img/**/*.{png,jpg,jpeg}')
		.pipe(rename(function (path) {
			path.basename += path.extname;
		}))
		.pipe(webp())
		.pipe(gulp.dest('img'));
});

gulp.task('webp', (done) => {
  gulp.src(SRC + '/img/content/**/*.{png,jpg,jpeg}')
  .pipe(rename((path) => {
    path.basename += path.extname;
  }))
  .pipe(webp())
  .pipe(gulp.dest(DIST + '/content/images/'))
})

// Img Convert
gulp.task('imagemin', (done) => {
  gulp.src(SRC + '/img/assets/**/*.{png,jpg,jpeg}')
    .pipe(changed(DIST + '/assets/images/'))
    .pipe(
      imagemin([
        pngquant({
          quality: [.60, .70], // 画質
          speed: 1 // スピード
        }),
        mozjpeg({ quality: 65 }), // 画質
        imagemin.svgo(),
        imagemin.optipng(),
        imagemin.gifsicle({ optimizationLevel: 3 }) // 圧縮率
      ])
    )
    .pipe(gulp.dest(DIST + '/assets/images/'))

    gulp.src(SRC + '/img/content/**/*.{png,jpg,jpeg}')
    .pipe(changed(DIST + '/content/images/'))
    .pipe(
      imagemin([
        pngquant({
          quality: [.60, .70], // 画質
          speed: 1 // スピード
        }),
        mozjpeg({ quality: 65 }), // 画質
        imagemin.svgo(),
        imagemin.optipng(),
        imagemin.gifsicle({ optimizationLevel: 3 }) // 圧縮率
      ])
    )
    .pipe(gulp.dest(DIST + '/content/images/'))
  done();
});

// svg
gulp.task('svgstore', () => {
  return gulp
  .src(SRC + '/svg/**/*.svg')
    .pipe(svgmin((file) => {
      const prefix = path.basename(file.relative, path.extname(file.relative));
      return {
        plugins: [{
          cleanupIDs: {
            prefix: prefix + '-',
            minify: true
          }
        }]
      }
    }))
    .pipe(svgstore({ inlineSvg: true }))

    .pipe(cheerio({
      run($) {
        $('[fill]').removeAttr('fill');
        $('[stroke]').removeAttr('stroke');
        $('svg').attr('style','display:none');
      },
      parserOptions: { xmlMode: true }
    }))
    .pipe(gulp.dest(DIST + '/assets/svg/'));
});


// watch
gulp.task('watch', () => {
  gulp.watch(SRC + '/sass/**/*.scss',gulp.parallel('sass'));
  gulp.watch(SRC + '/static/**/*.*',gulp.parallel('copy'));
  gulp.watch(SRC + '/js/**/*.js', gulp.parallel('webpack'));
  gulp.watch(SRC + '/sprite/*.png',gulp.parallel('sprite'));
  gulp.watch(SRC + '/sprite_sp/*.png',gulp.parallel('sprite_sp'));
  gulp.watch(SRC + '/svg/*.svg',gulp.parallel('svgstore'));
  // gulp.watch(SRC + '/webp/**/*.{png,jpg,jpeg}',gulp.parallel('webp'));
  gulp.watch(SRC + '/img/**/*.{png,jpg,jpeg}',gulp.parallel('imagemin'));
  gulp.watch(SRC + '/ect/**/*.ect',gulp.parallel('ect'));
});

gulp.task('all',gulp.series(gulp.parallel('webpack','sprite','sprite_sp','svgstore','imagemin','sass','ect', 'copy')));
gulp.task("default",gulp.series(gulp.parallel("server", "watch")));


