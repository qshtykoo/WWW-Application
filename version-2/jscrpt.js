

(function($) {
    $.snowfall = {
        intervals: [],
        $wrapper: null,
        start: function(options, $wrapper) {
            var options = $.extend({}, {
                size: '1vw',
                interval: 1000,
                color: '#fff',
                content: '&#10052;',
                disappear: 'linear'
            }, options);

            if ($wrapper == undefined) {
                $('body').append('<div id="snowfall-wrapper" />');
                $wrapper = $('#snowfall-wrapper');
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
                size: '2vw',
                interval: 1000,
                color: '#fff',
                content: '&#10052;',
                disappear: 'linear'
            }, options);

            if ($wrapper == undefined) {
                $('body').append('<div id="snowfall-wrapper" />');
                $wrapper = $('#snowfall-wrapper');
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
