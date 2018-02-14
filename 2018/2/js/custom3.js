$(document).ready(function() {
    var updateIntersection = function(i, p1, p2) {
        p1.moveTo([0, i.Y()]);
        p2.moveTo([i.X(), 0]);
    };

    var showIntersection = function(board, l1, l2) {
        var i = board.create('intersection', [l1, l2, 0], {
                name: '',
                fixed: true,
                showInfobox: false
            });

        var p1 = board.create('point', [0, i.Y()], {
                size: 0,
                name: '',
                fixed: true,
                showInfobox: false
            });

        board.create('line', [p1, i], {
                dash: 1,
                    strokeColor: 'black',
                    strokeWidth: 1,
                    straightFirst: false,
                    straightLast: false
                    });

        var p2 = board.create('point', [i.X(), 0], {
                size: 0,
                name: '',
                fixed: true,
                showInfobox: false
            });

        board.create('line', [p2, i], {
                dash: 1,
                    strokeColor: 'black',
                    strokeWidth: 1,
                    straightFirst: false,
                    straightLast: false
                    });

        // Keep the dashed intersection lines perpendicular to the axes.
        var me = this;
        l1.on('up', function() {
                updateIntersection(i, p1, p2);
            });
        l1.on('drag', function() {
                updateIntersection(i, p1, p2);
            });
        l2.on('up', function() {
                updateIntersection(i, p1, p2);
            });
        l2.on('drag', function() {
                updateIntersection(i, p1, p2);
            });
    };

    var board = JXG.JSXGraph.initBoard('box3', {
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

    var f = function(x) {
        return x;
    };

    var l1 = board.create('functiongraph', [f, -10, 10], {
        name: 'A',
        withLabel: true,
        label: { position: 'rt', offset: [0, -35] },
        strokeWidth: 2,
        strokeColor: 'blue',
        fixed: false
    });

    var f2 = function(x) {
        var alpha = 0.3;
        return (1 - alpha) *
            (3.4 *
             2.3 ** alpha) *
            (x ** -alpha) - 1;
    };

    var l2 = board.create('functiongraph', [f2, -10, 10], {
        name: 'B',
        withLabel: true,
        strokeWidth: 2,
        strokeColor: 'orange',
        fixed: false
    });

    var i = board.create('intersection', [l1, l2, 0], {
            name: '',
        fixed: true,
        showInfobox: false
    });

    showIntersection(board, l1, l2);
});
