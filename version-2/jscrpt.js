/* jquery-Snowfall v1.0 | h4wldev@gmail.com | http://github.com/h4wldev */

(function($) {
    $.snowfall = {
        intervals: [],
        $wrapper: null,
        start: function(options, $wrapper) {
            var options = $.extend({}, {
                size: 9,
                interval: 1000,
                color: '#fff',
                content: '&#10052;',
                disappear: 'linear'
            }, options);

            if ($wrapper == undefined) {
                $('body').append('<div id="snowfall-wrapper" />');
                $wrapper = $('#snowfall-wrapper');

                $wrapper.css({
                    'overflow': 'hidden',
                    'height': '100%',
                    'width': '100%',
                    'position': 'absolute',
                    'top': '0',
                    'left': '0'
                });
            }

            var $snowfall = $('<div class="flake-small" />').css({'position': 'absolute', 'top': '-50px'}).html(options.content);

            $.snowfall.$wrapper = $wrapper;
            $.snowfall.$wrapper.show();

            $.snowfall.intervals.push(setInterval(function() {
                var wrapperWidth = $wrapper.width(),
                    wrapperHeight = $wrapper.height(),
                    flakeSize = options.size,
                    duration = 22000,
                    startPosition = (Math.random() * wrapperWidth);

                $snowfall.clone().appendTo($wrapper).css({
                    'left': startPosition,
                    'width': flakeSize,
                    'height': flakeSize,
                }).animate({
                    top: wrapperHeight - 40,
                }, duration, options.disappear, function() {
                    $(this).remove();
                });
            }, options.interval));
        },
        stop: function() {
            $.snowfall.intervals.forEach(function(interval) {
                $.snowfall.$wrapper.hide();
                $.snowfall.$wrapper.children('div').each(function() {
                    $(this).remove();
                });
                clearInterval(interval);
            });
        }
    };

    $.snowfall2 = {
        intervals: [],
        $wrapper: null,
        start: function(options, $wrapper) {
            var options = $.extend({}, {
                size: 16,
                interval: 1000,
                color: '#fff',
                content: '&#10052;',
                disappear: 'linear'
            }, options);

            if ($wrapper == undefined) {
                $('body').append('<div id="snowfall-wrapper" />');
                $wrapper = $('#snowfall-wrapper');

                $wrapper.css({
                    'overflow': 'hidden',
                    'height': '100%',
                    'width': '100%',
                    'position': 'absolute',
                    'top': '0',
                    'left': '0'
                });
            }

            var $snowfall = $('<div class="flake-big" />').css({'position': 'absolute', 'top': '-50px'}).html(options.content);

            $.snowfall.$wrapper = $wrapper;
            $.snowfall.$wrapper.show();

            $.snowfall.intervals.push(setInterval(function() {
                var wrapperWidth = $wrapper.width(),
                    wrapperHeight = $wrapper.height(),
                    flakeSize = options.size,
                    duration = 45000,
                    startPosition = (Math.random() * wrapperWidth);

                $snowfall.clone().appendTo($wrapper).css({
                    'left': startPosition,
                    'width': flakeSize,
                    'height': flakeSize
                }).animate({
                    top: wrapperHeight - 40
                }, duration, options.disappear, function() {
                    $(this).remove();
                });
            }, options.interval));
        },
        stop: function() {
            $.snowfall.intervals.forEach(function(interval) {
                $.snowfall.$wrapper.hide();
                $.snowfall.$wrapper.children('div').each(function() {
                    $(this).remove();
                });
                clearInterval(interval);
            });
        }
    };
})(jQuery);