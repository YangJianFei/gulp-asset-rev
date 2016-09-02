//导入工具包 require('node_modules里对应模块')  "gulp-asset-rev": "0.0.15",
var gulp = require('gulp'), //本地安装gulp所用到的地方
    assetRev=require('gulp-asset-rev'),//加载索要用到的gulp插件
    runSequence=require('run-sequence'),
    less = require('gulp-less');
   //当发生异常时提示错误 确保本地安装gulp-notify和gulp-plumber
var notify = require('gulp-notify'),
    plumber = require('gulp-plumber');

//定义一个testLess任务（自定义任务名称）
gulp.task('testLess', function () {//定义任务名称和内容
    return gulp.src('less/**/*.less') //该任务针对的文件  return表示关联任务
        .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
        .pipe(less()) //该任务调用的插件
        .pipe(gulp.dest('css')); //执行完毕再css文件夹下面复制所有任务针对的文件
});

gulp.task('testScript',function(){
    return gulp.src('scripts/**/*.js')
        .pipe(assetRev());
        //.pipe(gulp.dest('scriptss'));
});

gulp.task('testCss',['testLess'],function(){
    return gulp.src('css/**/*.css')
        .pipe(assetRev());
        //.pipe(gulp.dest('csss'));
});
//
//gulp.task('testImg',function(){
//    gulp.src('image/**/*')
//        .pipe(gulp.dest('images'));
//});

gulp.task('testHtml',['testScript','testCss'],function(){
    gulp.src('pages/**/*.html')
        .pipe(assetRev())
        .pipe(gulp.dest('pagess'));
});

gulp.task("watch",function(){//可通过cmd执行watch入口  example：gulp watch
    runSequence('testHtml');//任务执行排序
});

//gulp.task('testWatch', function () {
//    gulp.watch('less/**/*.less', ['testHtml']); //当所有less文件发生改变时，调用testLess任务
//});

/*gulp.task('default',['testLess', 'elseTask']); //定义默认任务 elseTask为其他任务，该示例没有定义elseTask任务*/

//gulp.task(name[, deps], fn) 定义任务  name：任务名称 deps：依赖任务名称 fn：回调函数
//gulp.src(globs[, options]) 执行任务处理的文件  globs：处理的文件路径(字符串或者字符串数组)
//gulp.dest(path[, options]) 处理完后文件生成路径