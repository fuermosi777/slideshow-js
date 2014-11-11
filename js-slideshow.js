(function($) {

    $.fn.slideshow = function(options) {

        // This is the easiest way to have default options.
        var settings = $.extend({
            // These are the defaults.
            numOfSlide: 6,
            autoScroll: true,
            timeInterval: 5000,
        }, options);

        // get width
        var width = this.width();

        // get number of images
        var numOfImage = settings.images.length;

        // create show-box
        var showBox = document.createElement('div');
        showBox = $(showBox);
        showBox.width(width);
        showBox.height(width * 3.0 / 4.0);
        showBox.addClass('show-box').appendTo(this);

        // create show box img
        var showBoxImg = document.createElement('div');
        showBoxImg = $(showBoxImg);
        showBoxImg.css('background-image', 'url(' + settings.images[0] + ')');
        showBoxImg.addClass('show-box-img').appendTo(showBox);

        // create slide-box
        var slideBox = document.createElement('div');
        slideBox = $(slideBox);
        slideBox.width(width - 60.0);
        slideBox.height(width / settings.numOfSlide);
        slideBox.addClass('slide-box').appendTo(this);

        // create slide-wrapper
        var slideWrapper = document.createElement('div');
        slideWrapper = $(slideWrapper);
        slideWrapper.width((width - 60.0) / settings.numOfSlide * numOfImage);
        slideWrapper.height(width / 5.0);
        slideWrapper.addClass('slide-wrapper').appendTo(slideBox);

        // add arrow
        if (settings.numOfSlide < numOfImage) {
            var arrowLeft = $(document.createElement('div')).addClass('arrow-left');
            arrowLeft.css('bottom', width / settings.numOfSlide / 1.8);
            arrowLeft.appendTo(slideBox);


            var arrowRight = $(document.createElement('div')).addClass('arrow-right');
            arrowRight.css('bottom', width / settings.numOfSlide / 1.8);
            arrowRight.appendTo(slideBox);

            arrowLeft.click(function() {
                slideBox.animate({
                    scrollLeft: '-=' + (width - 60) / settings.numOfSlide
                }, 300);
            });

            arrowRight.click(function() {
                slideBox.animate({
                    scrollLeft: '+=' + (width - 60) / settings.numOfSlide
                }, 300);
            });
        }

        // create thumbnail
        for (var i = 0; i < numOfImage; i++) {
            var thumbnailBox = document.createElement('div');
            thumbnailBox = $(thumbnailBox);
            thumbnailBox.addClass('thumbnail-box');
            thumbnailBox.height(slideBox.height());
            thumbnailBox.width((width - 60.0) / settings.numOfSlide);
            thumbnailBox.appendTo(slideWrapper);

            var thumbnailImg = document.createElement('div');
            thumbnailImg = $(thumbnailImg);
            thumbnailImg.id = i;
            thumbnailImg.addClass('thumbnail-img');
            thumbnailImg.css('background-image', 'url(' + settings.images[i] + ')');
            thumbnailImg.appendTo(thumbnailBox);
            thumbnailImg.click(function(e) {
                var bg = $(this).css('background-image');
                console.log(bg);
                showBoxImg.css('background-image', bg);
            });
        }

        // auto scroll
        if (settings.autoScroll == true) {
        	var idx = 1;
            setInterval(function() {
            	if (idx < numOfImage){
            		var bg = 'url(' + settings.images[idx] + ')';
            		showBoxImg.css('background-image', bg);

            		idx += 1;
            	} else {
            		idx = 0;
            	}
            }, settings.timeInterval);
        }

        return this;
    };



}(jQuery));
