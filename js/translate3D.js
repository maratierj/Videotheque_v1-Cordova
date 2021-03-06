;(function($) {
    var delay = 0;
    $.fn.translate3d = function(translations,staticValue, speed, easing, complete) {
        var opt = $.speed(speed, easing, complete);
        opt.easing = opt.easing || 'ease';
        //translations = $.extend({x: 0, y: 0, z: 0}, translations);

        var translation = '';
        if(staticValue){
            translation = 'translate3d(' + translations.x + ', ' + translations.y + ', ' + translations.z + ')';
        }
        else{
            translation = 'translate3d(' + translations.x + 'px, ' + translations.y + 'px, ' + translations.z + 'px)';
        }

        return this.each(function() {
            var $this = $(this);

            $this.css({ 
                transitionDuration: opt.duration + 'ms',
                transitionTimingFunction: opt.easing,
                transform: translation
            });

            setTimeout(function() { 
                $this.css({ 
                    transitionDuration: '0s', 
                    transitionTimingFunction: 'ease'
                });

                opt.complete();
            }, opt.duration + (delay || 0));
        });
    };
})(jQuery);