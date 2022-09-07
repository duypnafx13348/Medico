const { src, dest, parallel, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const pug = require("gulp-pug");
const browserSync = require("browser-sync").create();
const data = require("gulp-data");
const fs = require("fs");

const FilesPath = {
  sassFiles: "src/sass/*.scss",
  htmlFiles: "src/views/layout/*.pug",
  jsFiles: "src/js/*.js",
  imgFiles: "src/images/**/*",
  jsonFiles: "src/data/*.json",
};

function sassTask() {
  console.log("sassTask");
  return src(FilesPath.sassFiles)
    .pipe(sass())
    .pipe(dest("public/css"))
    .pipe(browserSync.stream());
}

function htmlTask() {
  console.log("htmlTask");
  return src(FilesPath.htmlFiles)
    .pipe(
      data(function () {
        return JSON.parse(fs.readFileSync("src/data/dataPatient.json"));
      })
    )
    .pipe(pug({ pretty: true }))
    .pipe(dest("public"))
    .pipe(browserSync.stream());
}

function jsTask() {
  console.log("jsTask");
  return src(FilesPath.jsFiles)
    .pipe(dest("public/js"))
    .pipe(browserSync.stream());
}

function imageTask() {
  console.log("imageTask");
  return src(FilesPath.imgFiles).pipe(dest("public/images"));
}

function server() {
  // init public folder
  htmlTask();
  sassTask();
  jsTask();
  imageTask();
  browserSync.init({
    server: {
      baseDir: "./public",
    },
  });
  watch(FilesPath.htmlFiles, htmlTask);
  watch(FilesPath.sassFiles, sassTask);
  watch(FilesPath.jsFiles, jsTask);
  watch(FilesPath.imgFiles, imageTask);
}

exports.default = server;
