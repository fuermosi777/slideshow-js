slideshow-js
============

A lightweight slideshow plugin for jQuery. Provides basic features like scroll and select.

###Why?

After searching for a simple plugin with basic gallery and slideshow features for nothing, I decided to build one. Still in developing but satisfy basic needs.

###How to use?

- Clone this repo
- Copy & Paste both js-slideshow.css and js-slideshow.js into working directory
- add following tags
```
<link rel="stylesheet" href="js-slideshow.css">
<script src="js-slideshow.js"></script>
```
- Create a div with a class name. For example:```<div class="js-slideshow"></div>```
- Add images:
```
<script>
var image = [
  'img/1.png',
  'img/2.png',
  'img/3.png',
  'img/4.png',
  'img/5.png',
  'img/6.png',
  'img/7.png',
];
</script>
```
- Call function:
```
<script>
$('.js-slideshow').slideshow({
  images: image
});
</script>
```