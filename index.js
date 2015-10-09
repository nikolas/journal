var rotate = function($ul, i, expanded) {
    if (!expanded) {
        $ul.find('li').each(function(idx, el) {
            var $el = $(el);
            $el.css({
                'margin-top': i + 'px',
                '-ms-transform': 'rotate(' + i + 'deg)',
                '-webkit-transform': 'rotate(' + i + 'deg)',
                'transform': 'rotate(' + i + 'deg)'
            });
            
            if (i % 2 === 1) {
                i += 2 * Math.random();
            } else {
                i++;
            }
        });
    } else {
        $ul.find('li').each(function(idx, el) {
            var $el = $(el);
            $el.css({
                '-ms-transform': '',
                '-webkit-transform': '',
                'transform': ''
            });
        });
    }
};

$(document).ready(function() {
    var expanded = false;
    $('a.expand').on('click', function(e) {
        e.preventDefault();
        rotate($('ul.entries'), 0, expanded);
        expanded = !expanded;
    });
});