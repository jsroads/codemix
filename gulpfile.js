var gulp = require("gulp");
// var fileInline = require("gulp-file-inline");
// var htmlmin = require("gulp-htmlmin");
// var rev = require("gulp-rev");
// var imagemin = require("gulp-imagemin");
// var revCollector = require("gulp-rev-collector");
// var del = require("del");
var javascriptObfuscator = require("gulp-javascript-obfuscator");
// gulp.task("obfuscator", function (cb) {
//     gulp.src(["./build/web-mobile/src/project.js"], {allowEmpty: true})
//         .pipe(javascriptObfuscator({
//             compact: true,
//             deadCodeInjection: false,
//             debugProtection: false,
//             debugProtectionInterval: false,
//             disableConsoleOutput: false,
//             domainLock: [".zz-game.com"],
//             mangle: true,
//             renameGlobals: false,
//             rotateStringArray: false,
//             seed: 0,
//             selfDefending: false,
//             stringArrayEncoding: false,
//             stringArray: false,
//             target: "browser",
//             unicodeEscapeSequence: false
//         }))
//         .pipe(gulp.dest("./build/web-mobile")
//             .on("end", cb));
// });



gulp.task("default", function (cb) {
    gulp.src(["./build/wechatgame/src/project.js"],{allowEmpty: true})
        .pipe(javascriptObfuscator({
            // compact: true,//类型：boolean默认：true
            mangle: true, //短标识符的名称，如a，b，c
            stringArray: false,
            target: "browser",
        }))
        .pipe(gulp.dest("./release/src")
            .on("end", cb));
});