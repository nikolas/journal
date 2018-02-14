$(document).ready(function() {
    var board = JXG.JSXGraph.initBoard('box', {
        boundingbox: [-0.4, 5, 5, -0.4],
        axis: true,
        defaultAxes: {
            x: {
                name: 'x',
                label: {
                    offset: [440, -12]
                },
                withLabel: true,
                ticks: {
                    visible: false
                },
                layer: 9
            },
            y: {
                name: 'y',
                label: {
                    offset: [-22, 260]
                },
                withLabel: true,
                ticks: {
                    visible: false
                },
                layer: 9
            }
        },
        keepAspectRatio: true,
        showCopyright: false,
        showZoom: false,
        showReload: false,
        showNavigation: false,
        boundingbox: [-0.4, 5, 5, -0.4]
    });

    var l1 = board.create('line', [
        [0, 0],
        [10, 10]
    ], {
        name: 'line 1',
        withLabel: true,
        label: { position: 'rt', offset: [10, -20] },
        strokeColor: 'blue',
        strokeWidth: 2,
        fixed: false
    });

    var f = function(x) {
        var alpha = 0.3;
        return (1 - alpha) *
            (1.4 *
             1.6 ** alpha) *
            (x ** -alpha);
    };

    /*var f = function(x) {
        return -x + 5;
    };*/

    var l2 = board.create('functiongraph', [f], {
        name: 'line 2',
        withLabel: true,
        strokeWidth: 2,
        strokeColor: 'orange',
        fixed: false
    });

    var i = board.create('intersection', [l1, l2, 0], {
        name: 'intersection',
        fixed: true,
        showInfobox: false
    });
});
