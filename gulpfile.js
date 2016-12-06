/* 

Gulp eklenti tanimlamalari 

@sass 
sass dosyalarini css'e cevirir.

@uglifiy_js
js dosyalarini minify eder.

@concat_css
css dosyalarini birlestirir.

@concat 
js dosyalarini birlestirir.

@minify_css
css dosyalarini minify eder.

@rename
dosyalari yeniden isimlendirebilmemize olanak saglar.  

@htmlmin
html dosyalarini minify etmeye yarar, js kodundaki kırılımlar olmadığı sürece tek satıra indirir

@gulp-twig
Twig template motoru sayesinde gelismis html ic ice aktarimi ve layout yapisi olusturma
*/

var gulp = require("gulp"),
sass = require("gulp-sass"),
uglify_js = require("gulp-uglifyjs"),
minify = require("gulp-minify"), 
concat_css = require("gulp-concat-css"),
concat = require("gulp-concat"),
minify_css = require("gulp-minify-css"),
rename = require("gulp-rename"),
htmlmin = require('gulp-htmlmin'),
twig = require('gulp-twig');




/* 

Assets (assets) klasorunde urun ortamina hazir sekilde yapilandirilmis klasorler ve dosyalar bulunur.
Dev (dev) klasorunde projenin yapilandirilandigi klasorler ve dosyalar bulunur.

*/

var public_dir = "public/",
assets_dir = public_dir + "assets/",
assets_css_dir = public_dir + "assets/css/",
assets_js_dir = public_dir + "assets/js/",
assets_img_dir = public_dir + "assets/img/",
dev_dir = "dev/",
dev_js_dir = "dev/js/",
dev_layouts_dir = "dev/layouts/",
dev_pages_dir = "dev/pages/",
dev_scss_dir = "dev/scss/",
dev_scss_sub_dir = "dev/scss/*/",
dev_vendor_dir = "dev/vendor/";




/* 
Gorev I : sass

Ana sass dosyasini (dev/scss/main.scss) css'e cevir ve cevirilen css dosyasini minify edilip public/assets/css klasorune main.min.css olarak kaydedilmesi.

*/

gulp.task("sass", function() {
	return gulp.src(dev_scss_dir + "main.scss")
	.pipe(sass())
	.pipe(minify_css({
		compatibility: 'ie8'
	}))
	.pipe(rename('main.min.css'))
	.pipe(gulp.dest(assets_css_dir));
});




/* 

Gorev II : minify_js

dev/js içinde bulunan tüm dosyaları alıp minify ederek public/assets/js içine kaydeder, uzantılarından önce ".min" ekler

*/



gulp.task("minify_js", function() {
	return gulp.src(dev_js_dir + "*.js")
	.pipe(minify({
		ext:{
			src:false,
			min:'.min.js'
		},
		noSource: "*"
	}))
	.pipe(gulp.dest(assets_js_dir));
});




/* 

Gorev IV : plugins_js

Kullanilan eklentilerde bulunan javascriptlerin (dev/vendor) birlestirilip public/assets/js klasorune plugins.min.js olarak kaydedilmesi.

*/


gulp.task("plugins_js", function() {
	/*return gulp.src()
	.pipe(concat("plugins.min.js"))
	.pipe(uglify_js())
	.pipe(gulp.dest(assets_js_dir));
	*/
});




/* 

Gorev V : plugins_css

Kullanilan eklentilerde bulunan css'lerin (dev/vendor) birlestirilip public/assets/css klasorune plugins.min.css olarak kaydedilmesi.

*/

gulp.task("plugins_css", function() {
	/*
	return gulp.src()
	.pipe(concat_css("plugins.min.css"))
	.pipe(minify_css({
		compatibility: 'ie8'
	}))
	.pipe(gulp.dest(assets_css_dir));
	*/
});





/* 
Gorev VI : bootstrap

Bootstrap kutuphanesinin ozellestirilmis sass dosyalarının css e cevirilip public/assets/css klasorune bootstap.min.css olarak kaydedilmesi.

*/

gulp.task("bootstrap", function() {
	return gulp.src(dev_scss_dir + "bootstrap.scss")
	.pipe(sass())
	.pipe(minify_css({
		compatibility: 'ie8'
	}))
	.pipe(rename('bootstrap.min.css'))
	.pipe(gulp.dest(assets_css_dir));
});





/* 
Gorev VII : compile

Parcalanmis html sablonlarini birlestirilmesi ve minify seklinde ana dizine kaydedilmesi.

*/
 
 
gulp.task('compile', function () {
    gulp.src(dev_pages_dir + "*.twig")
        .pipe(twig())
		.pipe(htmlmin({collapseWhitespace: true, minifyJS: true}))
        .pipe(gulp.dest(public_dir))

})

/* 
Degisiklik yapildikca calisacak gorevler

Gorev I (sass),
Gorev II (external_js),
Gorev III (main_js),
Gorev VI (bootstrap)
Gorev VII (compile)

*/

gulp.task("watch", function() {
	gulp.watch(dev_scss_sub_dir + "*.scss", ['sass']);
	gulp.watch(dev_js_dir + "*.js", ['minify_js']);
	gulp.watch(dev_scss_dir + "bootstrap/*.scss", ['bootstrap']);
	gulp.watch(dev_pages_dir + "*.twig", ['compile']);
	gulp.watch(dev_layouts_dir + "*.twig", ['compile']);
	gulp.watch(dev_layouts_dir + "*/*.twig", ['compile']);
});





/* 

Varsayilan olarak calistarilacak gorevler

Gorev I (sass),
Gorev II (external_js),
Gorev III (main_js),
Gorev IV (plugins_js)
Gorev V (plugins_css)
Gorev VI (bootstrap)
Gorev VII (compile) 
*/

gulp.task("default", ["watch", "sass", "minify_js", "plugins_js", "plugins_css", "bootstrap", "compile"]);