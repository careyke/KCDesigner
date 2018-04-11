const path = require('path');
const gulp = require('gulp');
const gutil = require('gulp-util');
const gclean = require('gulp-clean');
const webpack = require('webpack');

let defaultStatsOptions = { //配置webpack打包之后的输出日志
    colors: gutil.colors.supportsColor,
    chunks: false,
    children: false
}
let config = require('./config/webpack.dev.config');
let dist = './server/';

gutil.log('构建环境参数：' + process.env.NODE_ENV);
gulp.task('clean_public', () => {
    gutil.log('清除public文件夹');
    return gulp.src(dist + 'public/**/*.*').pipe(gclean({ force: true }));
})

gulp.task('copy_iconFont', ['clean_public'], () => {
    gutil.log('拷贝第三方的图标字体库');
    gulp.src('./static/css/*.*').pipe(gulp.dest(dist + 'public/css'));
    return gulp.src('./static/fonts/*.*').pipe(gulp.dest(dist + 'public/fonts'));
})

gulp.task('dev', ['copy_iconFont'], () => {
    gutil.log('执行webpack打包.....');
    webpack(config, (err, stats) => {
        gutil.log(stats.toString(defaultStatsOptions))
        if (err || stats.hasErrors()) {
            gutil.log(gutil.colors.red('构建失败！！！'));
        } else {
            gutil.log(gutil.colors.green('构建成功！！！'));
            gutil.log(gutil.colors.green('打包目标路径：' + dist));
            return gulp.src('./html/index.html').pipe(gulp.dest(dist + 'public'));//复制index.html页面去public文件夹
        }
    })
})