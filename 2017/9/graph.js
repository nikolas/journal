var mkDemandSupply = function(board) {
    board.create('point', [2.5, 2.5], {name: 'a', size: 0, withLabel: false});
    board.create('point', [5, 0], {name: 'b', size: 0, withLabel: false});
    var l1 = board.create('line', ['a', 'b'], {
            strokeColor: 'rgb(255, 127, 14)',
            strokeWidth: 2
        });

    board.create('point', [0, 0], {name: 'c', size: 0, withLabel: false});
    board.create('point', [5, 5], {name: 'd', size: 0, withLabel: false});
    var l2 = board.create('line', ['c', 'd'], {
            strokeColor: 'steelblue',
            strokeWidth: 2
        });

    if (true) {
        var i = board.create('intersection', [l1, l2, 0], {
                name: ''
            });

        var p1 = board.create('point', [0, i.Y()], {
                size: 0,
                name: '',
                fixed: true
            });
        board.create('line', [p1, i], {
                dash: 1,
                    strokeColor: 'black',
                    strokeWidth: 1,
                    straightLast: false
                    });

        var p2 = board.create('point', [i.X(), 0], {
                size: 0,
                name: '',
                fixed: true
            });
        board.create('line', [p2, i], {
                dash: 1,
                    strokeColor: 'black',
                    strokeWidth: 1,
                    straightLast: false
                    });

        // Keep the dashed lines perpendicular to axes.
        l1.on('drag', function() {
                p1.moveTo([0, i.Y()]);
                p2.moveTo([i.X(), 0]);
            });
        l2.on('drag', function() {
                p1.moveTo([0, i.Y()]);
                p2.moveTo([i.X(), 0]);
            });
    }
};

$(document).ready(function() {
    var board = window.JXG.JSXGraph
        .initBoard('box', {
                axis: true,
                defaultAxes: {
                    x: {
                        ticks: {visible: false}
                    },
                    y: {
                        ticks: {visible: false}
                    }
                },
                showCopyright: false,
                showZoom: false,
                showReload: false,
                showNavigation: false,
                boundingbox: [-0.5, 5, 5, -0.5]
            });
    mkDemandSupply(board);
});
