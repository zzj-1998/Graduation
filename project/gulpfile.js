let gulp = require("gulp");
let browserify = require("browserify");
let source = require("vinyl-source-stream");
let tsify = require("tsify");
var workSpaceDir = __dirname + "/";
//copy bin文件到release文件夹
gulp.task("copyFile", function () {
    let baseCopyFilter = `${workSpaceDir}/laya/assets/**/*.*`;
    var stream = gulp.src([baseCopyFilter]);
    return stream.pipe(gulp.dest(`${workSpaceDir}/bin/res/`));
});

var b = browserify({
    basedir: workSpaceDir,
    //是否开启调试，开启后会生成jsmap，方便调试ts源码，但会影响编译速度
    debug: true,
    entries: [workSpaceDir + 'src/Main.ts'],
    cache: {},
    packageCache: {},
}).plugin(tsify);

//使用browserify，转换ts到js，并输出到bin/js目录
gulp.task("default", gulp.series(["copyFile"], function () {
    return b
    //使用tsify插件编译ts
        .bundle()
        //使用source把输出文件命名为bundle.js
        .pipe(source('bundle.js'))
        //把bundle.js复制到bin/js目录
        .pipe(gulp.dest(workSpaceDir + "/bin/js"));
}));