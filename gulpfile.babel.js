const gulp = require('gulp'),
    ect = require('gulp-ect'),
    sass = require('gulp-sass'),
    babel = require('gulp-babel'),
    webpackStream = require('webpack-stream'),
    webpack = require('webpack'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    bulkSass = require('gulp-sass-bulk-import'),
    cssmin = require('gulp-cssmin'),
    rename = require('gulp-rename'),
    frontnote = require('gulp-frontnote'),
    tinyping = require('gulp-tinypng-compress'),
    spritesmith = require('gulp.spritesmith'),
    svgstore = require('gulp-svgstore'),
    cheerio = require('gulp-cheerio'),
    svgmin = require('gulp-svgmin'),
    path = require('path'),
    plumber = require('gulp-plumber'),
    browser = require('browser-sync');


const SRC = 'src',
    DIST = 'dist';

// ect
gulp.task('ect', () => {
    gulp.src('src/ect/**/*.ect')
    .pipe(plumber())
    .pipe(ect({data(file, cb) {
        cb(ectConfig);
    }}))
    .pipe(gulp.dest(DIST))
    .pipe(browser.reload({stream:true}));
});

// sass
gulp.task('sass', () => {
    gulp.src(SRC + '/sass/**/*.scss')
    .pipe(plumber())
    .pipe(frontnote({ css: 'site/css/common.css' }))
    .pipe(sourcemaps.init())
    .pipe(bulkSass())
    .pipe(sass({outputStyle: 'expanded'})) //nested,compact,expanded,compressed
    .pipe(autoprefixer({
        // ☆IEは9以上、Androidは4以上、iOS Safariは8以上
        // その他は最新2バージョンで必要なベンダープレフィックスを付与する設定
        browsers: ['last 2 versions', 'ie >= 9', 'Android >= 4','ios_saf >= 8'],
        cascade: false
    }))
    .pipe(sourcemaps.write('../maps/'))
    .pipe(gulp.dest('guide/site/css'))
    .pipe(gulp.dest(DIST + '/site/css'))
    .pipe(browser.reload({stream:true}));
});

//browser sync
gulp.task('server', () => {
    browser({
        server: {
            baseDir: DIST
        }
    });
});

//CSSmin
gulp.task('cssmin', () => {
    gulp.src(SRC + '/css/**/*.css')
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('guide/site/css/min'))
    .pipe(gulp.dest(DIST + '/assets/css/min'));
});

//webpack
const webpackConfig = require('./webpack.config');

gulp.task('webpack', () => {
    gulp.src('./src/js/entry.js')
    .pipe(plumber())
    .pipe(webpackStream(webpackConfig, webpack))
    .pipe(gulp.dest(DIST + '/site/js/'));
});

//sprite-pc
gulp.task('sprite', () => {
    const spriteData = gulp.src(SRC + '/sprite/*.png')
    .pipe(spritesmith({
        imgName: 'sprite.png',
        cssName: '_sprite.scss',

        padding: 20,
        imgPath: '../../assets/images/sprite.png',
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
    spriteData.css.pipe(gulp.dest(SRC + '/sass/'));
});

//sprite_sp
gulp.task('sprite_sp', () => {
    const spriteData = gulp.src(SRC + '/sprite_sp/*.png')
    .pipe(spritesmith({
        imgName: 'sprite_sp.png',
        cssName: '_sprite_sp.scss',
        padding: 20,
        imgPath: '../../assets/images/sprite_sp.png',
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
    spriteData.img.pipe(gulp.dest('guide/assets/images/'))
    spriteData.css.pipe(gulp.dest(SRC + '/sass/'));
});

//img_min
gulp.task('tinypng', () => {
    gulp.src(SRC + '/img/assets/**/*.{png,jpg,jpeg}')
    .pipe(tinyping({
        key: 'llZEaFTtjee2TrIOmoBP25AkPKY5BhCW'
    }))
    .pipe(gulp.dest('guide/assets/images/'))
    .pipe(gulp.dest(DIST + '/assets/images/'));

    gulp.src(SRC + '/img/content/**/*.{png,jpg,jpeg}')
    .pipe(tinyping({
        key: 'llZEaFTtjee2TrIOmoBP25AkPKY5BhCW'
    }))
    .pipe(gulp.dest('guide/assets/images/'))
    .pipe(gulp.dest(DIST + '/content/images/'));
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


//watch
gulp.task('default',['server'], () => {
    gulp.watch(SRC + '/sass/**/*.scss',['sass']);
    gulp.watch(SRC + '/css/**/*.css',['cssmin']);
    gulp.watch(SRC + '/js/entry.js', ['webpack']);
    gulp.watch(SRC + '/sprite/*.png',['sprite']);
    gulp.watch(SRC + '/sprite_sp/*.png',['sprite_sp']);
    gulp.watch(SRC + '/svg/*.svg',['svgstore']);
    gulp.watch(SRC + '/img/**/*.{png,jpg,jpeg}',['tinypng']);
    gulp.watch(SRC + '/ect/**/*.ect', ['ect']);
});

